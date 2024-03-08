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
      {
        props.content
      }
    </Card>
  )
}

export default CustomCard
