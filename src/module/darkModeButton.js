import styled from 'styled-components'
import React from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { toDay, toNight } from './date';

const ThemeBtn = styled.span`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 20px;
  padding: 10px 14px;
  cursor: pointer;
  background-color: ${({theme}) => theme == "light" ? "black" : "#fff7ad"};
  border-radius: 10px;
  text-align: center;
`
function Theme() {
  const dispatch = useDispatch();
  const theme = useSelector(state => (state.modeReducer.time));

  return (
    <ThemeBtn onClick={() => {theme == "light" ? dispatch(toNight()) : dispatch(toDay())}} theme={theme}>
      {theme == "light" ? "🌙" :  "☀️"}
    </ThemeBtn>
  );
}

export default Theme;