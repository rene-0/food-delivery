type LineProps = {
  selected: boolean
}

export function Line({ selected }: LineProps) {
  return <div className={`${selected ? "bg-accent-950" : "bg-secondary-950/70"} h-2 w-full mx-2 rounded`}></div>
}
