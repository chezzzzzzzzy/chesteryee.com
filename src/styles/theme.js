const breakpoints = ['480px', '768px', '1024px', '1200px']

// aliases
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]


export default {
  breakpoints,

  colors: {
    background: '#fff',
    accent: '#07f',
    text: '#d1d1d1',
    textGrey: '#e6e6e6',
    textDarkGrey: '#585858',
  },

  padding: {
    mobile: '0 1.4rem',
    desktop: '0% 14%',
  },
  margin: {
    mobile: '0 1.4rem',
    desktop: '0% 14%',
  },

  fontSizes: {
    h1: '4.209rem',
    h2: '3.157rem',
    h3: '2.369rem',
    h4: '1.777rem',
    h5: '1.333rem',

    p: '1rem',

    small: '0.75rem',


    desktop_statistics: '4em',
    desktop_mega: '2.8em',
    desktop_title: '2.2em',
    desktop_subtitle: '1.6em',
    desktop_header: '1.4em',
    desktop_description: '1.0em',
    desktop_pointer: '0.8em',

    mobile_statistics: '2.6em',
    mobile_mega: '1.7em',
    mobile_title: '1.3em',
    mobile_subtitle: '1.1em',
    mobile_header: '1.0em',
    mobile_description: '0.9em',
    mobile_pointer: '0.67em',
  },

  mediaQueries: {
    mobile: 'min-width: 320px',
    tablet: 'min-width: 480px',
    laptop: 'min-width: 768px',
    desktop: 'min-width: 1024px',
    tv: 'min-width: 1201px',
  },
}
