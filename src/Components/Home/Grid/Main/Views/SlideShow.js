import React from 'react'
import '../../../../../Styles/Home/Grid/Main/Views/SlideShow.css'
import AndroidStudio from '../../../../../Images/Android-Studio.jpg'
import CSharp from '../../../../../Images/C#.jpg'
import CSS from '../../../../../Images/CSS.jpg'
import Dart from '../../../../../Images/Dart.png'
import Django from '../../../../../Images/Django.png'
import Flask from '../../../../../Images/Flask.jpg'
import Flutter from '../../../../../Images/Flutter.png'
import HTML from '../../../../../Images/HTML.png'
import JavaScript from '../../../../../Images/JavaScript.png'
import Kotlin from '../../../../../Images/Kotlin.jpg'
import Python from '../../../../../Images/Python.png'
import ReactImg from '../../../../../Images/React.png'
import ReactNative from '../../../../../Images/React-Native.png'
import TypeScript from '../../../../../Images/TypeScript.png'
import Unity from '../../../../../Images/Unity.png'
import VSCode from '../../../../../Images/Vs-Code.png'

const SlideShow = () => {
    return (
        <div>
            <h1>SlideShow</h1>
            <div id="slider">
            <figure>
            <img src={AndroidStudio} alt />
            <img src={CSharp} alt/>
            <img src={CSS} alt/>
            <img src={Dart} alt/>
            <img src={Django} alt/>
            <img src={Flask} alt />
            <img src={Flutter} alt/>
            <img src={CSS} alt/>
            <img src={HTML} alt/>
            <img src={JavaScript} alt />
            <img src={Kotlin} alt />
            <img src={Python} alt/>
            <img src={ReactImg} alt/>
            <img src={ReactNative} alt/>
            <img src={TypeScript} alt />
            <img src={Unity} alt />
            <img src={VSCode} alt/>
            </figure>
            </div>
        </div>
    );
}


export default SlideShow;