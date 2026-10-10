export default function Heading({ title, sub, dot }) {
  return (<div className="reveal"><h2 className="h2 flex items-center gap-3">{dot && <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-rust" />}{title}</h2>{sub && <p className="sub">{sub}</p>}</div>);
}
