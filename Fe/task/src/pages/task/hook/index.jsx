import React from 'react';
import { STATUS_TASK } from '../constants';

export const useColumns = ({handleDragStart, handleDrop}) => {

  return React.useMemo(() => {
    return [
      {
        title: STATUS_TASK.NEW,
        dataIndex: 'title',
        render: (text, record, index) =>  {

          return (
            <div
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(record, STATUS_TASK.NEW)}
              style={{ border: '1px solid black', marginBottom: '5px' }}
            >
              {record?.status === STATUS_TASK.NEW ? STATUS_TASK.NEW : ''}
          </div>
          )
        },
      },
      {
        title: STATUS_TASK.IN_PROGRESS,
        dataIndex: 'description',
        key: 'name',
        render: (text, record, index) =>  {

          return <div
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(record, STATUS_TASK.IN_PROGRESS)}
            style={{ border: '1px solid black', marginBottom: '5px' }}
          >
               {record?.status === STATUS_TASK.IN_PROGRESS ? STATUS_TASK.IN_PROGRESS : ''}
          </div>
          }
      },
      {
        title: STATUS_TASK.PENDING,
        dataIndex: 'estimate',
        key: 'name',
        render: (text, record, index) =>  {

          return (
            <div
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(record, STATUS_TASK.PENDING)}
              style={{ border: '1px solid black', marginBottom: '5px' }}
            >
                  {record?.status === STATUS_TASK.PENDING ? STATUS_TASK.PENDING : ''}
            </div>
          )
        },
      },
      {
        title: STATUS_TASK.DONE,
        dataIndex: 'status',
        key: 'name',
        render: (text, record, index) =>  {
          return (
            <div
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(record, STATUS_TASK.DONE)}
              style={{ border: '1px solid black', marginBottom: '5px' }}
            >
                  {record?.status === STATUS_TASK.DONE ? STATUS_TASK.DONE : ''}
            </div>
          )
        },
      },
      {
        title: STATUS_TASK.REJECT,
        dataIndex: 'startDate',
        key: 'name',
        render: (text, record, index) =>  {
          
          return (
            <div
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(record, STATUS_TASK.REJECT)}
              style={{ border: '1px solid black', marginBottom: '5px' }}
            >
                  {record?.status === STATUS_TASK.REJECT ? STATUS_TASK.REJECT : ''}
            </div>
          )
        },
      },
    ]
  }, [handleDragStart, handleDrop])
}