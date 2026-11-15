import React from 'react';
import { Link } from 'react-router-dom';
import { Figure, Pencil, Reveal, SplitWords } from './motion';

/**
 * En-tête de page éditorial : fil d'Ariane, étiquette, grand titre animé,
 * chapeau, actions, et une photo légendée ou un dessin au crayon.
 *
 * title : chaîne, ou tableau de segments [{ text, className }] pour SplitWords.
 */
export default function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  image,
  figureNumber,
  pencil,
  actions,
  meta,
  frameClassName = 'aspect-[4/3]',
  children,
  className = '',
}) {
  const hasVisual = Boolean(image || pencil);
  return (
    <section className={`relative overflow-hidden border-b border-surface-line ${className}`}>
      <div className="page relative pb-12 pt-10 md:pb-16 md:pt-14">
        {crumbs?.length ? (
          <Reveal as="nav" y={8} blur={false} aria-label="Fil d'Ariane" className="mb-8 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
            {crumbs.map((crumb, index) => (
              <React.Fragment key={crumb.label}>
                {index > 0 && <span aria-hidden="true" className="text-ink-300">/</span>}
                {crumb.to ? (
                  <Link to={crumb.to} className="link-draw hover:text-ink-900">{crumb.label}</Link>
                ) : (
                  <span className="text-ink-800" aria-current="page">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </Reveal>
        ) : null}

        <div className={`grid items-end gap-10 ${hasVisual ? 'lg:grid-cols-12 lg:gap-14' : ''}`}>
          <div className={hasVisual ? 'lg:col-span-7' : 'max-w-4xl'}>
            {eyebrow ? (
              <Reveal y={10} blur={false}>
                <p className="eyebrow">{eyebrow}</p>
              </Reveal>
            ) : null}
            <h1 className="mt-5 font-display text-display-xl text-ink-900">
              <SplitWords parts={title} delay={0.1} />
            </h1>
            {lead ? (
              <Reveal delay={0.35} className="mt-6 max-w-2xl text-[17px] leading-8 text-ink-600">
                {lead}
              </Reveal>
            ) : null}
            {actions ? (
              <Reveal delay={0.45} className="mt-8 flex flex-wrap items-center gap-3">
                {actions}
              </Reveal>
            ) : null}
            {meta ? (
              <Reveal delay={0.55} className="mt-10">
                {meta}
              </Reveal>
            ) : null}
          </div>

          {image ? (
            <div className="lg:col-span-5">
              <Figure image={image} number={figureNumber} frameClassName={frameClassName} priority sizes="(min-width: 1024px) 40vw, 100vw" />
            </div>
          ) : pencil ? (
            <div className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
              <Pencil drawing={pencil} delay={0.2} className="mx-auto max-w-[380px]" />
            </div>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
