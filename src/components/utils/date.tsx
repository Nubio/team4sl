export default function DisplayDate(date: Date) {
  return <>{new Intl.DateTimeFormat().format(date)}</>
}
