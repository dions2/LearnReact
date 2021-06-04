import { useEffect } from "react";
import { useHistory } from "react-router";
import { useRecoilValue } from "recoil";
import {authenticated} from '../store'

function Authenticated(props) {
  const auth = useRecoilValue(authenticated);
  const history = useHistory()
  useEffect(() => {
    if (!auth.check) {
        history.push('login')
    }
  }, []);
  return props.render;
}

export default Authenticated;
