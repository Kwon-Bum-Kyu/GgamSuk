import * as React from "react"
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={29}
      height={29}
      xmlns="http://www.w3.org/2000/svg"
      overflow="hidden"
      {...props}
    >
      <Defs>
        <ClipPath id="prefix__a">
          <Path d="M792 336h29v29h-29z" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#prefix__a)" transform="translate(-792 -336)">
        <Path d="M820.124 347.993l-3.414-5.679-.302-.514-.513.332-2.296 1.42a1.254 1.254 0 00-.574.725c-.06.212-.06.453.03.665a6.059 6.059 0 01-1.933.332 10.22 10.22 0 01-2.689-.453 16.794 16.794 0 00-1.329-.302h-.393c-.513 0-1.027.211-1.359.604l-.242.272a3.47 3.47 0 00-1.238-.242h-.242c-.181 0-.332.03-.513.03-.393.031-.786.061-1.178.061a4.272 4.272 0 01-1.934-.393c.03-.181.03-.362 0-.574a1.25 1.25 0 00-.574-.725l-2.265-1.42-.514-.332-.302.514-3.474 5.679-.302.513.514.302 2.326 1.42c.422.272.936.242 1.329-.06l1.963 2.296.03.06.061.03-.423.484a1.514 1.514 0 00.121 2.114c.272.242.604.363.966.363h.182c.211-.031.392-.091.574-.212.03.363.211.725.483.967.272.241.604.362.967.362h.12c.152 0 .303-.03.454-.09.03.332.181.664.453.876.241.211.543.332.846.332h.151c.211 0 .392-.091.574-.181.06.211.181.423.362.574.242.211.544.332.876.302h.121a1.54 1.54 0 00.514-.212l.03.031.423.332.03.03.03.03c.272.181.604.272.906.272h.182c.755-.06 1.359-.604 1.57-1.329a1.794 1.794 0 001.39-1.299c.695-.151 1.239-.665 1.39-1.329h.12a1.806 1.806 0 001.632-1.903v-.212l.241-.302 2.085-2.416c.392.332.936.332 1.389.06l2.326-1.42.514-.302-.272-.483zm-24.408 1.722l-2.326-1.42 3.443-5.679 2.296 1.419a.552.552 0 01.272.665l-.181.302-2.628 4.35-.182.272a.57.57 0 01-.392.151c-.091.03-.212 0-.302-.06zm3.866 5.195h-.09c-.484 0-.876-.423-.876-.906 0-.211.09-.423.211-.574l1.601-1.812a.98.98 0 01.695-.302c.211 0 .423.09.574.211.362.332.423.906.09 1.269l-1.601 1.812c-.151.182-.362.272-.604.302zm2.236 1.148h-.091c-.483 0-.876-.423-.876-.906a.96.96 0 01.211-.574l1.39-1.601a.984.984 0 01.695-.302.96.96 0 01.574.211c.362.333.423.907.09 1.269l-1.389 1.601a.787.787 0 01-.604.302zm1.903 1.118h-.091a.74.74 0 01-.483-.181.759.759 0 01-.061-1.057l1.39-1.602a.826.826 0 01.574-.241c.181 0 .362.06.483.181a.758.758 0 01.061 1.057l-1.39 1.601a.631.631 0 01-.483.242zm1.843.725c-.152 0-.333-.03-.454-.151a.614.614 0 01-.06-.846l1.178-1.359c.121-.121.272-.212.453-.212.151 0 .272.061.393.151a.612.612 0 01.06.846l-1.178 1.36c-.09.12-.241.181-.392.211zm6.645-3.534h-.12a1.43 1.43 0 01-.514-.121c0 .06.03.121.03.181a1.19 1.19 0 01-1.087 1.299c-.091 0-.212 0-.302-.03v.03a1.19 1.19 0 01-1.088 1.299c-.091 0-.211 0-.302-.03v.03a1.19 1.19 0 01-1.087 1.299h-.091c-.212 0-.423-.06-.634-.181l-.393-.302.967-1.118c.422-.514.362-1.269-.121-1.692a1.212 1.212 0 00-.786-.302c-.09 0-.211 0-.302.03a1.385 1.385 0 00-.453-.936 1.392 1.392 0 00-.906-.332c-.151 0-.272.03-.423.06 0-.423-.181-.816-.514-1.118-.272-.241-.604-.392-.966-.362-.182 0-.363.03-.544.09a1.612 1.612 0 00-.514-1.087c-.272-.242-.604-.393-.966-.363-.423 0-.846.182-1.148.514l-.786.906-.03-.03-2.054-2.386 2.628-4.35c.665.332 1.42.483 2.175.453.604 0 1.208-.061 1.752-.121h.181c.272 0 .544.03.786.121l-1.662 1.963a1.795 1.795 0 00-.453 1.329c.031.484.272.907.635 1.239.332.272.755.423 1.178.423h.151c.483-.03.936-.272 1.238-.634l2.055-2.357.332.302 4.863 4.169c.212.181.333.483.333.755v.121c.06.635-.423 1.178-1.058 1.239zm1.481-2.206c-.091-.151-.212-.271-.333-.392l-5.649-4.864-2.477 2.84a1.202 1.202 0 01-.815.423h-.091c-.302 0-.574-.121-.816-.302a1.164 1.164 0 01-.151-1.662l.031-.03 2.386-2.719c.242-.272.574-.393.906-.393h.121c.06 0 .091.031.151.031 1.39.272 2.658.755 4.139.755a6.06 6.06 0 002.205-.393l1.752 2.84.816 1.359-2.175 2.507zm3.594-2.446a.583.583 0 01-.302.09.596.596 0 01-.423-.181l-.181-.302-.816-1.329-1.903-3.142c-.181-.272-.09-.604.151-.785.031 0 .031-.031.061-.031l2.326-1.419 3.413 5.679-2.326 1.42z" />
      </G>
    </Svg>
  )
}

export default SvgComponent
