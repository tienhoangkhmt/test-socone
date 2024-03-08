import { Modal, Form, Input, Select, Row, Col } from 'antd'
import { patchTaskRecord, postTaskRecord } from '../../api/task.api';

const PopupAddAndEditTask = (props) => {
  const { open, record = {}, onClose, fetchData, data } = props;
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        const call = record?.isCreate ? postTaskRecord : patchTaskRecord
        call({
          ...record, ...values
        }, record?.taskId,).then(() => {
          onClose();
          form.resetFields();
          fetchData && fetchData()
        })
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  }

  return (
    <Modal open={open} onOk={handleSubmit} onCancel={onClose}>
      <Form form={form} layout="vertical" initialValues={record}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
                rules={[
                    {
                    required: true,
                    },
                ]}
                name="title"
                label="title"
              >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              rules={[
                {
                  required: true,
                },
              ]}
              name="status"
              label="status"
              >
              <Select options={data} />
            </Form.Item>
          </Col>
        </Row>    
        <Form.Item
            name="description"
            label="description"
        >
           <Input.TextArea />
        </Form.Item>           
      </Form>
    </Modal>
  )
}

export default PopupAddAndEditTask;