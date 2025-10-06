// sanity/queries/hero/hero-flex.ts
import { groq } from "next-sanity";
import { bodyQuery } from "../shared/body";
import { imageQuery } from "../shared/image";

// @sanity-typegen-ignore
export const heroFlexQuery = groq`
  _type == "hero-flex" => {
    _type,
    _key,
    variant,
    minHeight,
    minHeightCustom,
    contentSpacing,
    paddingStrategy,
    textAlign,
    invertText,
    mobileStack,
    mediaPosition,
    eyebrow,
    title,
    titleStyles {
      font,
      size,
      weight,
      tracking,
    },
    titleBodySpacing,
    body[]{
      ${bodyQuery}
    },
    ctas[]{
      _key,
      label,
      href,
      style,
      ariaLabel,
    },
    media {
      type,
      widthMode,
      widthValue,
      maxWidth,
      fit,
      align,
      image {
        ${imageQuery}
      },
      lottie {
        autoplay,
        loop,
        speed,
        ariaLabel,
        file {
          asset->{
            _id,
            url
          }
        }
      }
    },
    background {
      mode,
      token,
      color,
      overlayOpacity,
      image {
        ${imageQuery}
      },
      gradient {
        angle,
        from,
        to,
      }
    },
    shape {
      enabled,
      type,
      radius,
      padding,
      shadow,
      fill,
      color,
      token,
      image {
        ${imageQuery}
      },
      lottie {
        autoplay,
        loop,
        speed,
        ariaLabel,
        file {
          asset->{
            _id,
            url
          }
        }
      }
    }
  }
`;
