import React from 'react';
import { ArrowRight, ArrowUpRight, Expand, PlayCircle } from 'lucide-react';
import RichText, { Paragraphs } from './RichText';

/* -----------------------------------------------------------------------------
   Figures : photos plein cadre, planches au crayon et schémas sur « feuille »
----------------------------------------------------------------------------- */
const FIGURE_WIDTH = {
  small: 'mx-auto max-w-sm',
  normal: 'mx-auto max-w-2xl',
  wide: 'w-full',
};

export function LessonFigure({ figure, number, onOpenImage }) {
  const { image, caption, credit, size = 'normal' } = figure;
  if (!image?.src) return null;
  const onPaper = image.kind === 'schema' || image.kind === 'pencil';
  const open = () => onOpenImage?.({ src: image.src, alt: image.alt, title: caption, footer: credit });
  return (
    <figure className={`my-8 ${FIGURE_WIDTH[size] || FIGURE_WIDTH.normal}`}>
      <button
        type="button"
        onClick={open}
        className={`group relative block w-full overflow-hidden rounded-frame border border-ink-900/10 ${onPaper ? 'bg-[#fbfaf6] p-3 sm:p-5' : 'bg-ink-900/5'}`}
        aria-label={`Agrandir : ${caption || image.alt || 'illustration'}`}
      >
        <img
          src={image.src}
          alt={image.alt || ''}
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
          className={`mx-auto h-auto w-full transition-transform duration-700 ease-lab group-hover:scale-[1.015] ${onPaper ? 'mix-blend-multiply' : ''}`}
        />
        <span className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-night/60 text-chalk opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <Expand size={14} />
        </span>
      </button>
      {(caption || credit) && (
        <figcaption className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
          {caption ? (
            <span className="text-sm leading-6 text-ink-700">
              <span className="mr-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-900">Fig. {number}</span>
              <RichText text={caption} />
            </span>
          ) : null}
          {credit ? <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-500 sm:ml-auto">{credit}</span> : null}
        </figcaption>
      )}
    </figure>
  );
}

/* -----------------------------------------------------------------------------
   Encadrés
----------------------------------------------------------------------------- */
function Boxed({ label, tone, children, icon }) {
  const tones = {
    definition: 'border-l-[3px] border-biogy-600 bg-biogy-50/60',
    retenir: 'border border-ink-900/80 bg-white shadow-[4px_4px_0_0_rgb(var(--ink-900)/0.85)]',
    example: 'border-l-[3px] border-cobalt-500 bg-cobalt-50/60',
    warning: 'border-l-[3px] border-accent-500 bg-accent-50/70',
    note: 'border border-dashed border-ink-900/25 bg-paper-50',
  };
  const labels = {
    definition: 'text-biogy-800',
    retenir: 'text-ink-900',
    example: 'text-cobalt-800',
    warning: 'text-accent-800',
    note: 'text-ink-600',
  };
  return (
    <aside className={`my-7 rounded-frame px-5 py-4 sm:px-6 sm:py-5 ${tones[tone]}`}>
      <p className={`flex items-center gap-2 font-mono text-[10.5px] font-medium uppercase tracking-[0.18em] ${labels[tone]}`}>
        {icon}{label}
      </p>
      <div className="mt-2.5 text-[16px] leading-7 text-ink-800">{children}</div>
    </aside>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true">
      <path d="M8 1.5l1.9 4.1 4.5.5-3.4 3 1 4.4L8 11.2 4 13.5l1-4.4-3.4-3 4.5-.5z" fill="currentColor" />
    </svg>
  );
}

/* -----------------------------------------------------------------------------
   Rendu d'un bloc de cours
----------------------------------------------------------------------------- */
export function Block({ block, figureNumber, onOpenImage }) {
  switch (block.type) {
    case 'p':
      return <Paragraphs text={block.text} className="my-4 text-[17px] leading-[1.8] text-ink-800" />;

    case 'definition':
      return (
        <Boxed tone="definition" label="Définition">
          <p>
            {block.term ? <strong className="mr-1 font-display text-[1.15rem] font-semibold text-ink-900">{block.term} :</strong> : null}
            <RichText text={block.text} />
          </p>
        </Boxed>
      );

    case 'retenir':
      return (
        <Boxed tone="retenir" label={block.title || 'À retenir'} icon={<StarIcon />}>
          {block.items ? (
            <ul className="space-y-2">
              {block.items.map((item, index) => (
                <li key={index} className="flex gap-3"><span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-biogy-600" /><span><RichText text={item} /></span></li>
              ))}
            </ul>
          ) : <Paragraphs text={block.text} className="[&+p]:mt-2" />}
        </Boxed>
      );

    case 'example':
      return (
        <Boxed tone="example" label={block.title ? `Exemple — ${block.title}` : 'Exemple'}>
          <Paragraphs text={block.text} className="[&+p]:mt-2" />
        </Boxed>
      );

    case 'warning':
      return (
        <Boxed tone="warning" label={block.title || 'Attention'}>
          <Paragraphs text={block.text} className="[&+p]:mt-2" />
        </Boxed>
      );

    case 'note':
      return (
        <Boxed tone="note" label={block.title || 'Pour aller plus loin'}>
          <Paragraphs text={block.text} className="[&+p]:mt-2" />
        </Boxed>
      );

    case 'list': {
      const Tag = block.ordered ? 'ol' : 'ul';
      return (
        <div className="my-5">
          {block.title ? <p className="mb-2 font-semibold text-ink-900"><RichText text={block.title} /></p> : null}
          <Tag className="space-y-2.5">
            {block.items.map((item, index) => (
              <li key={index} className="flex gap-3 text-[17px] leading-[1.7] text-ink-800">
                {block.ordered
                  ? <span className="mt-[3px] w-6 shrink-0 font-mono text-[13px] text-biogy-700">{index + 1}.</span>
                  : <span className="mt-[12px] h-[5px] w-[5px] shrink-0 rounded-full bg-ink-500" />}
                <span><RichText text={item} /></span>
              </li>
            ))}
          </Tag>
        </div>
      );
    }

    case 'steps':
      return (
        <div className="my-8">
          {block.title ? <p className="mb-4 font-display text-xl text-ink-900"><RichText text={block.title} /></p> : null}
          <ol className="relative ml-4 border-l border-ink-900/15">
            {block.items.map((item, index) => {
              const step = typeof item === 'string' ? { text: item } : item;
              return (
                <li key={index} className="relative pb-6 pl-8 last:pb-0">
                  <span className="absolute -left-[15px] top-0 flex h-[30px] w-[30px] items-center justify-center rounded-full border border-ink-900/20 bg-paper font-mono text-[12px] text-ink-900">
                    {index + 1}
                  </span>
                  {step.title ? <p className="pt-1 font-semibold text-ink-900"><RichText text={step.title} /></p> : null}
                  <p className={`${step.title ? 'mt-1' : 'pt-1'} text-[16px] leading-7 text-ink-800`}><RichText text={step.text} /></p>
                </li>
              );
            })}
          </ol>
        </div>
      );

    case 'formula':
      return (
        <div className="my-8 rounded-frame border border-ink-900/10 bg-white px-6 py-6 text-center">
          {block.title ? <p className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-500">{block.title}</p> : null}
          <p className="font-display text-[1.6rem] italic leading-snug text-ink-900 sm:text-[1.9rem]"><RichText text={block.expression} /></p>
          {block.legend?.length ? (
            <dl className="mx-auto mt-5 grid max-w-xl gap-x-6 gap-y-1.5 text-left text-sm sm:grid-cols-2">
              {block.legend.map((item) => (
                <div key={item.symbol} className="flex gap-2">
                  <dt className="font-display italic text-ink-900"><RichText text={item.symbol} /></dt>
                  <dd className="text-ink-600">: <RichText text={item.meaning} /></dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
      );

    case 'table':
      return (
        <div className="my-8">
          {block.caption ? <p className="mb-3 font-display text-lg text-ink-900"><RichText text={block.caption} /></p> : null}
          <div className="overflow-x-auto rounded-frame border border-ink-900/10 bg-white">
            <table className="w-full min-w-[480px] border-collapse text-left text-[15px]">
              <thead>
                <tr className="bg-paper-200/70">
                  {block.head.map((cell, index) => (
                    <th key={index} scope="col" className="border-b border-ink-900/10 px-4 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-ink-600">
                      <RichText text={cell} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="border-b border-ink-900/[0.07] last:border-0">
                    {row.map((cell, cellIndex) => (
                      cellIndex === 0
                        ? <th key={cellIndex} scope="row" className="px-4 py-3 align-top font-semibold text-ink-900"><RichText text={cell} /></th>
                        : <td key={cellIndex} className="px-4 py-3 align-top leading-6 text-ink-800"><RichText text={cell} /></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    case 'compare':
      return (
        <div className="my-8">
          {block.title ? <p className="mb-4 font-display text-xl text-ink-900"><RichText text={block.title} /></p> : null}
          <div className={`grid gap-px overflow-hidden rounded-frame border border-ink-900/10 bg-ink-900/10 ${block.columns.length === 3 ? 'md:grid-cols-3' : 'sm:grid-cols-2'}`}>
            {block.columns.map((column) => (
              <div key={column.title} className="bg-white p-5">
                <p className="font-display text-xl text-ink-900">{column.title}</p>
                {column.subtitle ? <p className="mt-0.5 text-sm text-ink-500"><RichText text={column.subtitle} /></p> : null}
                <ul className="mt-4 space-y-2.5">
                  {column.items.map((item, index) => (
                    <li key={index} className="flex gap-2.5 text-[15px] leading-6 text-ink-800">
                      <span className="mt-[9px] h-1 w-3 shrink-0 bg-biogy-600" /><span><RichText text={item} /></span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      );

    case 'cards': {
      const tones = {
        red: 'border-t-[#a3263a]', blue: 'border-t-[#344c92]', green: 'border-t-[#2f7d3f]',
        yellow: 'border-t-[#c79200]', white: 'border-t-ink-300', default: 'border-t-biogy-600',
      };
      return (
        <div className={`my-8 grid gap-3 sm:grid-cols-2 ${block.items.length > 4 ? 'lg:grid-cols-3' : ''}`}>
          {block.items.map((card) => (
            <div key={card.title} className={`rounded-frame border border-ink-900/10 border-t-[3px] bg-white p-5 ${tones[card.tone] || tones.default}`}>
              <p className="font-display text-lg text-ink-900">{card.title}</p>
              <p className="mt-1.5 text-[15px] leading-6 text-ink-700"><RichText text={card.text} /></p>
            </div>
          ))}
        </div>
      );
    }

    case 'flow':
      return (
        <div className="my-8">
          {block.title ? <p className="mb-4 font-display text-xl text-ink-900"><RichText text={block.title} /></p> : null}
          <ol className="flex flex-col items-stretch gap-2 md:flex-row md:items-center">
            {block.steps.map((step, index) => {
              const item = typeof step === 'string' ? { title: step } : step;
              return (
                <React.Fragment key={index}>
                  {index > 0 && <ArrowRight aria-hidden="true" size={18} className="mx-auto shrink-0 rotate-90 text-ink-400 md:rotate-0" />}
                  <li className="flex-1 rounded-frame border border-ink-900/15 bg-white px-4 py-3 text-center">
                    <span className="block font-semibold text-ink-900"><RichText text={item.title} /></span>
                    {item.text ? <span className="mt-1 block text-[13px] leading-5 text-ink-600"><RichText text={item.text} /></span> : null}
                  </li>
                </React.Fragment>
              );
            })}
          </ol>
          {block.caption ? <p className="mt-3 text-sm text-ink-600"><RichText text={block.caption} /></p> : null}
        </div>
      );

    case 'figure':
      return <LessonFigure figure={block} number={figureNumber} onOpenImage={onOpenImage} />;

    case 'video':
      return (
        <a href={block.url} target="_blank" rel="noopener noreferrer" className="group my-7 flex items-center gap-4 rounded-frame border border-ink-900/10 bg-white p-4 transition-colors hover:border-ink-900/30">
          <PlayCircle size={34} strokeWidth={1.2} className="shrink-0 text-biogy-700" />
          <span className="min-w-0 flex-1">
            <span className="block font-semibold text-ink-900">{block.title}</span>
            {block.detail ? <span className="mt-0.5 block text-sm text-ink-600"><RichText text={block.detail} /></span> : null}
          </span>
          <ArrowUpRight size={18} className="shrink-0 text-ink-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      );

    default:
      return null;
  }
}
