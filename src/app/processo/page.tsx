import Image from 'next/image'
import { useContext } from 'react'
import MyContext from '../context/context'
import useToken from '@/functions/getTokenLocalStorage'
import { getServerSession } from "next-auth";
import { authOptions } from '@/lib/auth'

import styles from '@/styles/default_layout/MainContainer.module.css'


type User = {
  user:{
    id:number,
    userName: string
    token:string
  }
};

export default async function DashBoard() {
  const {user}:User = await getServerSession(authOptions);
  console.log(user );

  const erick = await GetDATA()
  return (
    <div className={styles.aa}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget molestie velit. Aliquam enim ipsum, fringilla nec augue vel, tempor porta dolor. Sed cursus imperdiet congue. Nulla facilisi. Quisque id nisi rhoncus, tempor neque vel, commodo nisi. Sed ligula lectus, cursus eget lobortis id, posuere in nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris sapien arcu, imperdiet nec turpis eget, laoreet mattis diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

    Pellentesque vitae tellus neque. Quisque pellentesque hendrerit varius. Pellentesque ac egestas risus, nec ultricies libero. Pellentesque augue mauris, aliquet ultricies odio quis, mattis ullamcorper arcu. Donec quam libero, aliquam sit amet ligula ut, suscipit tempus lacus. Vivamus eu congue nulla, et sagittis libero. Vestibulum pretium nunc nec nulla consectetur, a fermentum nisi bibendum. Nullam in odio congue, bibendum elit vel, blandit tellus. In et orci at ex hendrerit luctus eget sed enim. Suspendisse potenti. Maecenas sagittis sit amet arcu non scelerisque.
    
    Proin varius maximus erat, et feugiat elit mattis sed. Pellentesque pharetra tincidunt dictum. Nam a pellentesque neque. Praesent tempus eget libero quis pharetra. Vivamus quam quam, maximus a aliquet vel, tristique quis nunc. Ut aliquam metus non ipsum vulputate, sit amet mollis ex consectetur. Etiam eget sagittis sapien, eu congue augue. Curabitur id sem eleifend, euismod urna vitae, varius urna. Nunc maximus, sem non ultricies malesuada, diam libero dictum lectus, quis tincidunt nibh justo eget neque. Nullam porta consequat magna quis dictum. Nullam ullamcorper tincidunt massa quis finibus. Nam in risus et velit laoreet tincidunt. Pellentesque at vulputate libero.
    
    In nec viverra ipsum. Vivamus id erat massa. Sed sodales massa eu tempus elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum id sodales turpis. Phasellus volutpat nibh ligula, ac aliquam quam semper id. Pellentesque odio nunc, porttitor in augue et, auctor faucibus lacus.
    
    Ut eget dignissim turpis, quis condimentum augue. Aenean neque neque, rutrum et condimentum vitae, lobortis ac eros. Aliquam eu urna convallis, lobortis tortor nec, bibendum erat. Curabitur felis ligula, tincidunt eu blandit sit amet, pulvinar eu ante. Quisque et lorem a quam tempor venenatis. Morbi nisi felis, volutpat id sapien finibus, sagittis feugiat elit. Aenean tincidunt varius ipsum. Vivamus non erat enim. Ut nibh sem, dictum sit amet libero in, tempor pellentesque justo.
    
    Quisque rutrum ipsum scelerisque turpis ornare, eget dignissim eros maximus. Fusce placerat est libero, nec pulvinar enim laoreet sit amet. Morbi dapibus in lorem vel imperdiet. Nunc porta lectus sed ante facilisis, non aliquam magna eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut fringilla fermentum eros, vitae vestibulum lacus elementum at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    
    Nunc sagittis pulvinar ipsum non aliquet. Pellentesque iaculis rutrum accumsan. Proin vel mi dignissim, pellentesque ex ut, lacinia eros. Integer purus augue, vulputate quis ex eu, elementum mattis justo. Etiam sagittis sit amet erat ut fermentum. Morbi quam enim, varius nec turpis eget, consequat consequat tortor. Vestibulum non bibendum purus. Cras in laoreet justo, eu ultricies urna. Pellentesque nec molestie diam, ac hendrerit arcu. Duis fringilla leo vitae orci pharetra pulvinar. In facilisis nisi velit, nec ullamcorper purus dapibus in. Sed elementum sem in leo consectetur, aliquet lobortis diam tincidunt.
    
    Phasellus faucibus aliquam est, ac auctor purus rutrum eu. Nulla nec orci tortor. Quisque venenatis augue in tempus malesuada. Donec bibendum sagittis justo in tincidunt. Curabitur quis ultricies purus. Quisque consequat ante nec suscipit consectetur. Vestibulum feugiat est urna, eget volutpat justo dapibus sed. Praesent faucibus at erat eu placerat.
    
    Aenean finibus ut mauris vitae ultrices. Sed tempus nibh sed augue eleifend, sed cursus turpis interdum. Aenean imperdiet urna erat, eu lacinia velit viverra at. Curabitur feugiat porttitor orci ut tempus. Nullam mollis, ligula nec pulvinar vestibulum, augue ipsum viverra eros, vitae ornare velit mi ac nulla. Donec venenatis velit in laoreet convallis. Quisque id erat quis elit egestas finibus. Etiam mauris mi, sagittis vel enim et, tincidunt dapibus tortor. Nulla nec sagittis urna.
    
    Ut congue molestie orci, nec suscipit odio faucibus quis. Proin in ultrices est. Suspendisse potenti. Aliquam quis commodo lectus. Aliquam id sagittis lorem. Phasellus sit amet quam justo. Nam nec justo lacus.Pellentesque vitae tellus neque. Quisque pellentesque hendrerit varius. Pellentesque ac egestas risus, nec ultricies libero. Pellentesque augue mauris, aliquet ultricies odio quis, mattis ullamcorper arcu. Donec quam libero, aliquam sit amet ligula ut, suscipit tempus lacus. Vivamus eu congue nulla, et sagittis libero. Vestibulum pretium nunc nec nulla consectetur, a fermentum nisi bibendum. Nullam in odio congue, bibendum elit vel, blandit tellus. In et orci at ex hendrerit luctus eget sed enim. Suspendisse potenti. Maecenas sagittis sit amet arcu non scelerisque.
    
    Proin varius maximus erat, et feugiat elit mattis sed. Pellentesque pharetra tincidunt dictum. Nam a pellentesque neque. Praesent tempus eget libero quis pharetra. Vivamus quam quam, maximus a aliquet vel, tristique quis nunc. Ut aliquam metus non ipsum vulputate, sit amet mollis ex consectetur. Etiam eget sagittis sapien, eu congue augue. Curabitur id sem eleifend, euismod urna vitae, varius urna. Nunc maximus, sem non ultricies malesuada, diam libero dictum lectus, quis tincidunt nibh justo eget neque. Nullam porta consequat magna quis dictum. Nullam ullamcorper tincidunt massa quis finibus. Nam in risus et velit laoreet tincidunt. Pellentesque at vulputate libero.
    
    In nec viverra ipsum. Vivamus id erat massa. Sed sodales massa eu tempus elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum id sodales turpis. Phasellus volutpat nibh ligula, ac aliquam quam semper id. Pellentesque odio nunc, porttitor in augue et, auctor faucibus lacus.
    
    Ut eget dignissim turpis, quis condimentum augue. Aenean neque neque, rutrum et condimentum vitae, lobortis ac eros. Aliquam eu urna convallis, lobortis tortor nec, bibendum erat. Curabitur felis ligula, tincidunt eu blandit sit amet, pulvinar eu ante. Quisque et lorem a quam tempor venenatis. Morbi nisi felis, volutpat id sapien finibus, sagittis feugiat elit. Aenean tincidunt varius ipsum. Vivamus non erat enim. Ut nibh sem, dictum sit amet libero in, tempor pellentesque justo.
    
    Quisque rutrum ipsum scelerisque turpis ornare, eget dignissim eros maximus. Fusce placerat est libero, nec pulvinar enim laoreet sit amet. Morbi dapibus in lorem vel imperdiet. Nunc porta lectus sed ante facilisis, non aliquam magna eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut fringilla fermentum eros, vitae vestibulum lacus elementum at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    
    Nunc sagittis pulvinar ipsum non aliquet. Pellentesque iaculis rutrum accumsan. Proin vel mi dignissim, pellentesque ex ut, lacinia eros. Integer purus augue, vulputate quis ex eu, elementum mattis justo. Etiam sagittis sit amet erat ut fermentum. Morbi quam enim, varius nec turpis eget, consequat consequat tortor. Vestibulum non bibendum purus. Cras in laoreet justo, eu ultricies urna. Pellentesque nec molestie diam, ac hendrerit arcu. Duis fringilla leo vitae orci pharetra pulvinar. In facilisis nisi velit, nec ullamcorper purus dapibus in. Sed elementum sem in leo consectetur, aliquet lobortis diam tincidunt.
    
    Phasellus faucibus aliquam est, ac auctor purus rutrum eu. Nulla nec orci tortor. Quisque venenatis augue in tempus malesuada. Donec bibendum sagittis justo in tincidunt. Curabitur quis ultricies purus. Quisque consequat ante nec suscipit consectetur. Vestibulum feugiat est urna, eget volutpat justo dapibus sed. Praesent faucibus at erat eu placerat.
    
    Aenean finibus ut mauris vitae ultrices. Sed tempus nibh sed augue eleifend, sed cursus turpis interdum. Aenean imperdiet urna erat, eu lacinia velit viverra at. Curabitur feugiat porttitor orci ut tempus. Nullam mollis, ligula nec pulvinar vestibulum, augue ipsum viverra eros, vitae ornare velit mi ac nulla. Donec venenatis velit in laoreet convallis. Quisque id erat quis elit egestas finibus. Etiam mauris mi, sagittis vel enim et, tincidunt dapibus tortor. Nulla nec sagittis urna.
    
    Ut congue molestie orci, nec suscipit odio faucibus quis. Proin in ultrices est. Suspendisse potenti. Aliquam quis commodo lectus. Aliquam id sagittis lorem. Phasellus sit amet quam justo. Nam nec justo lacus.
    </div>
  )
}
function GetDATA() {
  return new Promise((resolve) => {
    // Simulando o tempo de espera para a resposta da Promise
    setTimeout(() =>{

      resolve('erick');
    }, 1000);
  });
}