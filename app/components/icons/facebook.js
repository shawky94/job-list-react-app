import Svg, { Path, G } from 'react-native-svg';
import React from 'react';

export default Facebook = (props) => {
	return (
    <Svg  {...props.style} viewBox="0 0 19 22">
    <G id="Page-1" stroke="none" stroke-width="1" fill={props.fill} fill-rule="evenodd">
      <G id="Footer" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform={{translate:'-1083.000000, -143.000000'}} opacity="0.5">
          <G fill="#FFFFFF" fill-rule="nonzero" id="Social-media">
              <G transform={{translate:'1083.000000, 142.000000'}}>
                <Path d="M1.94530246,4.06703138 C1.94530246,4.59624005 1.94530246,6.95832016 1.94530246,6.95832016 L0,6.95832016 L0,10.4937993 L1.94530246,10.4937993 L1.94530246,21 L5.94136667,21 L5.94136667,10.4940922 L8.62291129,10.4940922 C8.62291129,10.4940922 8.87404968,8.79885704 8.99578522,6.94528402 C8.64676518,6.94528402 5.95647712,6.94528402 5.95647712,6.94528402 C5.95647712,6.94528402 5.95647712,4.88845464 5.95647712,4.52793458 C5.95647712,4.16663334 6.39216927,3.68063435 6.82279471,3.68063435 C7.25261307,3.68063435 8.1597782,3.68063435 9,3.68063435 C9,3.19927368 9,1.53606735 9,0 C7.87832923,0 6.60223593,0 6.03974153,0 C1.84652405,-0.000244122461 1.94530246,3.53875037 1.94530246,4.06703138 Z" id="Facebook"></Path>
              </G>
         </G>
     </G>
    </G>

    </Svg>
	)
}
