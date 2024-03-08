import { objText } from "./utils";
import './css/index.css'

const Table = (props) => {
  const { columns = [], dataSource = [], rowKey = 'id' } = props;

  return (
      <table>
          <tr>
              {
                  columns?.map(item => <th key={item?.dataIndex} className={objText[item?.align] || ''}>{item?.title}</th>)
              }            
          </tr>
          {
              dataSource.map((item, index) => (
                  <tr key={item[rowKey]}>
                      {
                          columns?.map((column) => <td key={item?.dataIndex} className={objText[item?.align] || ''}>{column.render && column.render(item[column?.dataIndex], item, index)}</td>)
                      }
                  </tr>
              ))
          }
      </table>
  )
}

export default Table;