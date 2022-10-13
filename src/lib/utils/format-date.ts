import format from 'date-fns/format'

export default function formatDate(date: Date, stringFormat = 'MM/dd/yy') {
  return format(date, stringFormat)
}
