import React, {useRef, useEffect, useCallback } from 'react'
import {useSpring, animated} from 'react-spring';
import styled from 'styled-components';
import {MdClose} from 'react-icons/md'
import {useDispatch, useSelector} from 'react-redux'
import {modal} from '../../actions/modalAction'
import RegisterScreen from './RegisterScreen'

const Modal = ({showModal}) => {
    const modalRef  = useRef();
    const animation = useSpring ({
        config:{
            duration:250
        },
        opacity:showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    })
    const dispatch = useDispatch();

    const closeModal = e => {
        if(modalRef.current === e.target) {
            dispatch(modal());
        }
    }

    const KeyPress = useCallback(e => {
        if(e.key === 'Escape' && showModal) {
            dispatch(modal());
        }
    }, [showModal]);

    useEffect(() => {
        document.addEventListener('keydown', KeyPress );
        return () => document.removeEventListener('keydown', KeyPress);
    }, [KeyPress])

  
    return (
        <>{ showModal ?
         (
             <Background ref= {modalRef} onClick ={closeModal}>
                 <animated.div style={animation}>
                 <ModalWrapper>
                     <ModalContent>
                         <RegisterScreen /> 
                     </ModalContent>
                     <CloseModal onClick={() => dispatch(modal())} />
                      </ModalWrapper>
                      </animated.div>
             </Background>
         ) : null  
}</>
    )
}

export default Modal


const Background = styled.div`
    width: 100%;
    height: 100%;
    background:rgba(0,0,0,0.8);
    position:fixed;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:999;

`

const ModalWrapper = styled.div`
    width: 500px;
    height: 700px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    background:#fff;
    display:column;
    position: relative;
    z-index:999;
    border-radius: 10px;

`

const ModalContent = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    line-height:1.8;
    color: #141414;
    padding:10px 20px;

  

`

const CloseModal = styled(MdClose)`
    cursor:pointer;
    position:absolute;
    top:10px;
    right:20px;
    width:32px;
    height:32px;
    padding:0;
    z-index:10;
`