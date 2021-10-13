import * as React from "react"
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={27}
      height={26}
      xmlns="http://www.w3.org/2000/svg"
      overflow="hidden"
      {...props}
    >
      <Defs>
        <ClipPath id="prefix__a">
          <Path d="M793 214h27v26h-27z" />
        </ClipPath>
        <ClipPath id="prefix__b">
          <Path d="M794 215h25v24h-25z" />
        </ClipPath>
        <ClipPath id="prefix__c">
          <Path d="M794 215h25v24h-25z" />
        </ClipPath>
        <ClipPath id="prefix__d">
          <Path d="M794 215h25v24h-25z" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#prefix__a)" transform="translate(-793 -214)">
        <G clipPath="url(#prefix__b)">
          <G clipPath="url(#prefix__c)">
            <G clipPath="url(#prefix__d)">
              <Path
                d="M12 3.582l2.025 6.079.114.342h6.525l-4.742 4.125-.243.211.092.31 1.84 6.134-5.327-3.69-.284-.196-.285.197-5.327 3.688 1.84-6.134.093-.31-.243-.211-4.742-4.125H9.86l.114-.342zm-2.5 5.92H2l5.75 5-2.25 7.504 6.5-4.501 6.5 4.501-2.25-7.502 5.75-5h-7.5L12 2z"
                stroke="#FFC000"
                strokeWidth={0.333}
                fill="#FFC000"
                transform="matrix(1.04167 0 0 1 794 215)"
              />
            </G>
          </G>
        </G>
      </G>
    </Svg>
  )
}

export default SvgComponent
