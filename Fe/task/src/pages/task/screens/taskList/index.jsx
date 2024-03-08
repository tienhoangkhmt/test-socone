import { useEffect, useState } from "react";
import { deleteTaskRecord, getTaskList, patchTaskRecord } from "../../api/task.api";
import { useColumns } from "../../hook";
import CustomCard from "../../../../components/Card";
import PopupAddAndEditTask from "../../component/PopupAddAndEditTask";
import { MoreOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Dropdown, Button, Select } from 'antd'
import { STATUS_TASK } from "../../constants";

const TaskList = () => {
  const [items, setItems] = useState([]);
  const [record, setRecord] = useState({});
  const [open, setOpen] = useState(false);
  const data = Object.values(STATUS_TASK).map(item => ({
    label: item,
    value: item
  }))

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = (params) => {
    getTaskList(params).then(res => {
      setItems(res?.data)
    })
  }

  const handleDragStart = (index, record) => {
    setRecord({...record})
  };

  const handleDrop = (status) => {
    patchTaskRecord({
      ...record, status
    }, record?.taskId).then(res => {
      setItems((prev) => prev.map(((item) => {
        if(record?.taskId === item?.taskId) {
          return res?.data
        }
        return item
      })))
      setRecord({})
    })
  };

  const col = useColumns({
    handleDragStart,
    handleDrop
  })

  const renderHeader = (title, id, record) => {
    const menuItem = [
      {
        label: 'Edit',
        key: '1',
        icon: <EditOutlined />,
        primary: true,
        onClick: () => {
          setOpen(true)
          setRecord(record)
        }
      },
      {
        label: 'Delete',
        key: '2',
        icon: <DeleteOutlined />,
        danger: true,
        onClick: () =>  deleteTaskRecord(id).then(() => {
          fetchData();
        })
      }
    ]
    const menuProps = {
      items: menuItem,
    };

    return <div className="flex justify-between items-center">
      <p>{title}</p>
      <Dropdown placement="bottomRight" menu={menuProps}>
        <MoreOutlined className="cursor-pointer" />
      </Dropdown>
    </div>
  }

  const handleClose = () => {
    setRecord({});
    setOpen(false)
  }

  const handleShowPopup = () => {
    setOpen(true);
    setRecord({status: STATUS_TASK.NEW, isCreate: true})
  }


  return (
    <div className="h-100" style={{ margin: '2rem 0' }}>
      {/* <Table columns={col} dataSource={items} /> */}
      <div className="filter flex" style={{ marginLeft: '3.5rem'}}>
        <div className="form">
          <Select 
            options={data} 
            onClear={() => fetchData({})} 
            allowClear style={{ minWidth: '200px'}} 
            onSelect={(value) => fetchData({status: value})} 
          />
        </div>
        <div style={{ marginLeft: '15px' }}><Button onClick={handleShowPopup}>Add</Button></div>
      </div>
      <div  style={{ display: 'flex' }}  className="h-100">
      {
        col.map((item, index) => (
          <div
            key={index}
            style={{ flex: '1 1 auto'}}
            onDrop={() => handleDrop(item.title)}
            onDragOver={(e) => e.preventDefault()}
            className="h-100"
          >
            <h3 style={{ textAlign: 'center', color: '#bbbdc1' }}>{item.title}</h3>
            {
              items.map((record, key) => {
                if(record?.status !== item?.title) {
                  return (
                    <div  
                      style={{
                        width: 300,
                      }} 
                      key={key}
                      draggable
                      onDragStart={() => handleDragStart(index,record, item.title)}
                      title={record.title}
                      >
                    </div>
                  )
                }
                return  (
                  <CustomCard   
                    key={key}
                    draggable
                    onDragStart={() => handleDragStart(index,record, item.title)}
                    title={renderHeader(record.title, record?.taskId, record)}
                    style={{
                      margin: '1.5rem auto',
                      boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
                      minWidth: '268px',
                      maxWidth: '268px',
                    }}
                  />
                )
              })
            }
          </div>
        ))
      }
      </div>
      {
        open && <PopupAddAndEditTask data={data} open={open} record={record} onClose={handleClose} fetchData={fetchData} />
      }
  </div>
  )
}

export default TaskList;
