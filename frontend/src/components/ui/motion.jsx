import React, { useEffect, useRef, useState } from 'react';
import {
  animate,
  motion,
  MotionGlobalConfig,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';

// En développement uniquement : ?sans-animation fige les animations (captures d'écran, tests).
if (import.meta.env.DEV && typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('sans-animation')) {
  MotionGlobalConfig.skipAnimations = true;
}

// Courbe « laboratoire » : départ franc, arrivée très douce.
export const EASE = [0.22, 1, 0.36, 1];

/* -----------------------------------------------------------------------------
   Reveal — apparition au défilement (fondu + léger glissement + mise au point)
----------------------------------------------------------------------------- */
export function Reveal({
  as = 'div',
  delay = 0,
  y = 22,
  blur = true,
  duration = 0.9,
  amount = 0.2,
  className = '',
  children,
  ...rest
}) {
  const Component = motion[as] || motion.div;
  return (
    <Component
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y, filter: blur ? 'blur(6px)' : 'blur(0px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Component>
  );
}

/* -----------------------------------------------------------------------------
   Stagger / StaggerItem — apparition en cascade d'une liste
----------------------------------------------------------------------------- */
const staggerParent = (stagger, delay) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

const staggerChild = {
  hidden: { opacity: 0, y: 26, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.85, ease: EASE } },
};

export function Stagger({ as = 'div', stagger = 0.09, delay = 0, amount = 0.15, className = '', children, ...rest }) {
  const Component = motion[as] || motion.div;
  return (
    <Component
      data-reveal=""
      className={className}
      variants={staggerParent(stagger, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      {...rest}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({ as = 'div', className = '', children, ...rest }) {
  const Component = motion[as] || motion.div;
  return (
    <Component data-reveal="" className={className} variants={staggerChild} {...rest}>
      {children}
    </Component>
  );
}

/* -----------------------------------------------------------------------------
   SplitWords — les mots montent un à un depuis une ligne de masque
   `parts` : [{ text, className }] pour mêler romain et italique.
----------------------------------------------------------------------------- */
export function SplitWords({ parts, delay = 0, stagger = 0.06, className = '' }) {
  const reduce = useReducedMotion();
  const segments = typeof parts === 'string' ? [{ text: parts }] : parts;
  let index = 0;
  return (
    <span className={className}>
      {segments.map((segment, segmentIndex) => {
        if (segment.br) return <br key={`br-${segmentIndex}`} className={segment.className} />;
        const words = segment.text.split(' ').filter(Boolean);
        return (
          <React.Fragment key={segmentIndex}>
            {words.map((word, wordIndex) => {
              const current = index++;
              return (
                <React.Fragment key={`${segmentIndex}-${wordIndex}`}>
                  <span className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
                    <motion.span
                      className={`inline-block ${segment.className || ''}`}
                      initial={reduce ? { opacity: 0 } : { y: '108%', rotate: 2 }}
                      animate={reduce ? { opacity: 1 } : { y: '0%', rotate: 0 }}
                      transition={{ duration: 1.05, delay: delay + current * stagger, ease: EASE }}
                    >
                      {word}
                    </motion.span>
                  </span>
                  {' '}
                </React.Fragment>
              );
            })}
          </React.Fragment>
        );
      })}
    </span>
  );
}

/* -----------------------------------------------------------------------------
   FocusImage — photo qui « fait la mise au point » (flou → net) puis
   glisse légèrement au défilement (parallaxe).
----------------------------------------------------------------------------- */
export function FocusImage({
  image,
  className = '',
  imgClassName = '',
  parallax = 7,
  priority = false,
  sizes = '(min-width: 1024px) 50vw, 100vw',
  zoomOnHover = false,
}) {
  const wrapper = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: wrapper, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${parallax}%`, `${parallax}%`]);
  const enableParallax = parallax > 0 && !reduce;

  if (!image) return null;
  const position = /\b(absolute|fixed)\b/.test(className) ? '' : 'relative';

  return (
    <div ref={wrapper} className={`${position} overflow-hidden bg-ink-900/10 ${className}`}>
      <motion.div
        className="absolute inset-x-0"
        style={enableParallax ? { y, top: `-${parallax}%`, bottom: `-${parallax}%` } : { top: 0, bottom: 0 }}
      >
        <motion.img
          src={image.src}
          srcSet={image.srcSet}
          sizes={sizes}
          width={image.width}
          height={image.height}
          alt={image.alt || ''}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchpriority={priority ? 'high' : undefined}
          className={`h-full w-full object-cover ${zoomOnHover ? 'transition-transform duration-[1.2s] ease-lab group-hover:scale-[1.045]' : ''} ${imgClassName}`}
          style={image.position ? { objectPosition: image.position } : undefined}
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.14, filter: 'blur(16px)' }}
          whileInView={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.7, ease: EASE }}
        />
      </motion.div>
    </div>
  );
}

/* -----------------------------------------------------------------------------
   Figure — photo + légende « Fig. 0X — … »
----------------------------------------------------------------------------- */
export function Figure({ image, number, className = '', frameClassName = 'aspect-[4/5]', priority, sizes, parallax, captionClassName = '' }) {
  if (!image) return null;
  return (
    <figure className={className}>
      <FocusImage image={image} className={`rounded-frame ${frameClassName}`} priority={priority} sizes={sizes} parallax={parallax} />
      {image.caption ? (
        <figcaption className={`figure-caption mt-3 flex gap-3 ${captionClassName}`}>
          {number ? <span className="shrink-0 whitespace-nowrap text-ink-900">Fig. {String(number).padStart(2, '0')}</span> : null}
          <span>{image.caption}</span>
        </figcaption>
      ) : null}
    </figure>
  );
}

/* -----------------------------------------------------------------------------
   Pencil — dessin au crayon qui apparaît comme s'il était tracé (balayage)
----------------------------------------------------------------------------- */
// Le conteneur (jamais masqué) est observé ; seule l'image est découpée.
// Chrome considère un élément masqué par clip-path comme hors écran, d'où
// cette séparation, et le chargement piloté à la main plutôt que loading="lazy".
export function Pencil({ drawing, className = '', imgClassName = '', delay = 0, light = false }) {
  const ref = useRef(null);
  const img = useRef(null);
  const near = useInView(ref, { once: true, margin: '0px 0px 400px 0px' });
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const [loaded, setLoaded] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (near && img.current?.complete) setLoaded(true);
  }, [near]);

  if (!drawing) return null;
  const show = inView && loaded;
  return (
    <div
      ref={ref}
      data-reveal=""
      className={`pointer-events-none select-none ${className}`}
      style={{ aspectRatio: `${drawing.width} / ${drawing.height}` }}
    >
      {near ? (
        <motion.img
          ref={img}
          src={drawing.src}
          alt={drawing.alt || ''}
          width={drawing.width}
          height={drawing.height}
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`h-full w-full object-contain ${light ? 'pencil-light' : 'pencil'} ${imgClassName}`}
          initial={reduce ? { opacity: 0 } : { opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
          animate={show ? (reduce ? { opacity: 1 } : { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }) : undefined}
          transition={{ duration: 2.2, delay, ease: [0.65, 0, 0.35, 1] }}
        />
      ) : null}
    </div>
  );
}

/* -----------------------------------------------------------------------------
   Counter — chiffre qui défile jusqu'à sa valeur quand il devient visible
----------------------------------------------------------------------------- */
export function Counter({ value, duration = 1.6, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView) return undefined;
    if (reduce) { setDisplay(value); return undefined; }
    const controls = animate(0, value, {
      duration,
      ease: EASE,
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, value, duration, reduce]);

  return <span ref={ref} className={`tabular-nums ${className}`}>{display}</span>;
}

/* -----------------------------------------------------------------------------
   Marquee — bandeau qui défile lentement (pause au survol)
----------------------------------------------------------------------------- */
export function Marquee({ items, className = '', itemClassName = '' }) {
  const row = (hidden) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className={`flex items-center whitespace-nowrap ${itemClassName}`}>
          <span>{item}</span>
          <svg viewBox="0 0 16 16" className="mx-7 h-3 w-3 shrink-0 opacity-50" aria-hidden="true">
            <circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="8" cy="8" r="1.6" fill="currentColor" />
          </svg>
        </li>
      ))}
    </ul>
  );
  return (
    <div className={`group relative flex overflow-hidden ${className}`}>
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

/* -----------------------------------------------------------------------------
   DrawPath — tracé SVG qui se dessine
----------------------------------------------------------------------------- */
export function DrawPath({ d, delay = 0, duration = 2, className = '', ...rest }) {
  const reduce = useReducedMotion();
  return (
    <motion.path
      d={d}
      className={className}
      initial={reduce ? { pathLength: 1 } : { pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration, delay, ease: [0.65, 0, 0.35, 1] }}
      {...rest}
    />
  );
}
