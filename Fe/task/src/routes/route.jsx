import PublicLayout from "../layouts/public";
import { useNavigate } from "react-router-dom";

const WrapperRoutes = (props) => {
  const { isAuth, layout, component } = props;
  const Component = component;
  const WrapperLayout = layout || PublicLayout;
  const token = true;
  const navigate = useNavigate();

  if(isAuth && !token) {
    return navigate('/login')
  }

  return (
      <WrapperLayout>
        <Component  />
      </WrapperLayout>
  )
}

export default WrapperRoutes;
