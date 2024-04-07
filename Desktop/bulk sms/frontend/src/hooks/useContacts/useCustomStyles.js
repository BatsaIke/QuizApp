// hooks/useCustomStyles.js
import { useSelector } from 'react-redux';
import stylesConfig from '../../StyleConfig';

const useCustomStyles = () => {
  const userEmail = useSelector(state => state.auth.user?.data?.email);

  const configName = userEmail === "accraubuntulions@gmail.com" ? "specialUser" : "default";
  const currentStyles = stylesConfig[configName];

  return currentStyles;
};

export default useCustomStyles;
