import * as React from "react"
import Svg, { Defs, ClipPath, Path, Image, G, Use } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={50}
      height={50}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      overflow="hidden"
      {...props}
    >
      <Defs>
        <ClipPath id="prefix__a">
          <Path d="M587 132h21v21h-21z" />
        </ClipPath>
        <ClipPath id="prefix__b">
          <Path
            d="M588 143c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </ClipPath>
        <Image
          width={60}
          height={60}
          xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAkACQAAD/4QCARXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAAACQAAAAAQAAAJAAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAA+gAwAEAAAAAQAAAA8AAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/AABEIAA8ADwMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2wBDAAICAgICAgMCAgMFAwMDBQYFBQUFBggGBgYGBggKCAgICAgICgoKCgoKCgoMDAwMDAwODg4ODg8PDw8PDw8PDw//2wBDAQICAgQEBAcEBAcQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/3QAEAAH/2gAMAwEAAhEDEQA/AP1d8PaPB4/ubbxZ4w0yfXbnU9kotTIoXSradgIFjSSSNVCqHeeSP97KNnysu1Fy/Empr8Fb258T+GtNuLDRbSRILrSGdPKuxcGZUuodjS+W++JTub5njJV1BRMUPFaeH/h3pB8IeM7828M9rcaZC9xEbuC80WbYt0QsSl0uIoETeZlZW24jUqwWObwxYaP8ddG8iwv2v/DwjOnXV5FCton2ezl320MMLKHE7FYpZZCgiCkxxoCx8sA//9k="
          preserveAspectRatio="none"
          id="prefix__c"
        />
      </Defs>
      <G clipPath="url(#prefix__a)" transform="translate(-587 -132)">
        <G clipPath="url(#prefix__b)">
          <Use
            width="100%"
            height="100%"
            xlinkHref="#prefix__c"
            transform="matrix(.33333 0 0 .33333 588 133)"
          />
        </G>
      </G>
    </Svg>
  )
}

export default SvgComponent
