import jsonexport from 'jsonexport/dist'
import fileSaver from 'file-saver'
import formatDate from 'date-fns/format'
import pick from 'lodash/pick'

export function exportCsv<T>(data: T[], fields: string[], filename: string) {
  jsonexport(
    data.map((e) => pick(e, fields)),
    {
      mapHeaders(header) {
        switch (header) {
          default:
            return header
        }
      },
      typeHandlers: {
        Boolean(value) {
          return value ? 'Yes' : 'No'
        },
        String(value, index, parent) {
          return value
        },
      },
    },
    (err, csv) => {
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' })
      fileSaver.saveAs(
        blob,
        `${formatDate(new Date(), 'MM-dd-yyyy')}_${filename}.csv`
      )
    }
  )
}
