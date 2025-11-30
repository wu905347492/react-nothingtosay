import { Space, Badge, Divider } from 'antd';

interface badgeProps {
  title: string;
  children: React.ReactNode;
}
const NBadge = (props: badgeProps) => {
  console.log(props,'1');
  console.log(props.title);
  return (
    <Space vertical>
      {props.title}
      {props.children}
      <Badge status="success" text="Success" />
      <Badge status="error" text="Error" />
      <Badge status="default" text="Default" />
      <Badge status="processing" text="Processing" />
      <Badge status="warning" text="Warning" />
    </Space>
  );
};
// 不再建议使用React.FC
const Dashboard: React.FC = () => {
  return (
    <div>
      <p>1</p>
      <a>2</a>
      <Divider />
      <NBadge title="我是一个禁用按钮" children={<div>1</div>}></NBadge>
      <Divider />
      <ul
        style={{
          backgroundColor: 'black',
          color: 'pink',
        }}
      >
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
};
export { Dashboard };
