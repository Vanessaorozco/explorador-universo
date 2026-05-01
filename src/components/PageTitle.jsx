export default function PageTitle({ eyebrow, title, description }) {
  return (
    <section className="bg-navySoft px-4 py-12 text-center text-white">
      {eyebrow && <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-cyanBrand">{eyebrow}</p>}
      <h1 className="text-3xl font-black sm:text-4xl">
        {title.before} <span className="text-cyanBrand">{title.highlight}</span>
      </h1>
      {description && <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-300">{description}</p>}
    </section>
  );
}
