import { Card } from 'antd';

const CustomCard = (props) => {
  return (
    <Card
      {
        ...props
      }
      // bordered={false}
      // style={{
      //   width: 300,
      // }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  )
}

export default CustomCard