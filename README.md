
  # Film Portfolio Website

  This is a code bundle for Film Portfolio Website. The original project is available at https://www.figma.com/design/wchuhjldZNk0HdboMxOguW/Film-Portfolio-Website.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  

  ## Images

  Full-resolution originals live in `originals/` and are not published. After adding or changing one, run `npm run images` (needs ImageMagick and ffmpeg) to regenerate the web-sized copies in `public/images/`, then reference it in code with `thumb('/images/name.jpg')` or `full('/images/name.jpg')` from `src/img.ts`.
