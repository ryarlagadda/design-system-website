import React, { Component, PropTypes } from 'react';

class LetterSVG extends Component {
  static propTypes = {
    letter: PropTypes.string,
    purple: PropTypes.bool,
  }

  state = {
    A: (
      <svg viewBox="0 0 73 60.41">
        <path fill="#8cd211" d="M41 0l16 28 16 28-32.29-.14-32.29-.08 16.27-27.89z" />
        <path fill="#152935" d="M61.12 58.4l-28.82-.13-28.83-.13L18 33.24 32.52 8.33l14.3 25 14.3 25m3.46 2l-16-28-16-28-16.31 27.91L0 60.13l32.29.14 32.29.14v-.08z" />
      </svg>
    ),
    B: (
      <svg viewBox="0 0 57.5 73">
        <path fill="#5596e6" d="M57.5 67.17H8.33V0H57.5L36.71 32.75 57.5 67.17z" />
        <path fill="#152935" d="M45.53 7.83L26.69 37.51l-.66 1 .64 1.06L45.62 71H2V7.83h43.53m3.64-2H0V73h49.17L28.38 38.58 49.17 5.83z" />
      </svg>
    ),
    C: (
      <svg viewBox="0 0 73 73.15">
        <path fill="#e62133" d="M12.18 52.67V17.56L42.59 0 73 17.56v35.11L42.59 70.23 12.18 52.67z" />
        <path fill="#231f20" d="M31.41 73.15L0 55V18.75L31.41.61l31.41 18.14V55zM2 53.87l29.41 17 29.41-17v-34l-29.41-17L2 19.9v34z" />
      </svg>
    ),
    D: (
      <svg viewBox="0 0 55.77 72.75">
        <path fill="#efc100" d="M7.38 0v63c26.72 0 48.38-14.1 48.38-31.48S34.11 0 7.38 0z" />
        <path fill="#152935" d="M1 72.75H0v-65h1c27.22 0 49.38 14.6 49.38 32.52S28.22 72.75 1 72.75zm1-63v61c25.66-.35 46.38-13.89 46.38-30.48S27.66 10.13 2 9.75z" />
      </svg>
    ),
    E: (
      <svg viewBox="0 0 59.17 60.41">
        <path fill={this.props.purple ? '#AF6EE8' : '#5596e6'} d="M6 0h53.17v53.92H6z" />
        <path fill="#152935" d="M51.17 8.49v49.92H2V8.49h49.17m2-2H0v53.92h53.17V6.49z" />
      </svg>
    ),
    G: (
      <svg viewBox="0 0 54.87 73">
        <ellipse fill="#5596e6" cx="32.52" cy="33.3" rx="22.35" ry="33.3" />
        <path fill="#152935" d="M22.35 8.41c11.22 0 20.35 14 20.35 31.3S33.57 71 22.35 71 2 57 2 39.7 11.13 8.41 22.35 8.41m0-2C10 6.41 0 21.31 0 39.7S10 73 22.35 73 44.7 58.09 44.7 39.7 34.7 6.4 22.35 6.4z" />
      </svg>
    ),
    I: (
      <svg viewBox="0 0 17.73 60.39">
        <path fill="#e71d32" d="M6.1 0h11.63v54H6.1z" />
        <path fill="#152935" d="M13.63 60.39H-.02v-56h13.65v56zm-11.65-2h9.63v-52H1.98v52z" />
      </svg>
    ),
    M: (
      <svg viewBox="0 0 73.01 61.48">
        <path fill="#5596e6" d="M73.01 21.7L61.78 57.36l-37.39.33-11.87-35.45L42.57 0l30.44 21.7z" />
        <path fill="#152935" d="M30.2 6.38l27.94 20.2-10.58 32.81-34.48.08L2.35 26.71 30.2 6.38m0-2.47L.01 26l11.63 35.48 37.37-.09 11.48-35.58L30.19 3.9z" />
      </svg>
    ),
    N: (
      <svg viewBox="0 0 72.5 67.25">
        <path fill="#af6ee8" d="M64 57H10.25l8-57H72.5L64 57z" />
        <path fill="#152935" d="M59.93 12.25l-7.9 53H2.3l7.44-53h50.19m2.32-2H8l-8 57h53.75l8.5-57z" />
      </svg>
    ),
    O: (
      <svg viewBox="0 0 64.42 60.37">
        <circle fill="#efc100" cx="36.17" cy="28.25" r="28.25" />
        <path fill="#152935" d="M29.25 60.37A29.25 29.25 0 1 1 58.5 31.12a29.25 29.25 0 0 1-29.25 29.25zm0-56.5A27.25 27.25 0 1 0 56.5 31.12 27.25 27.25 0 0 0 29.25 3.87z" />
      </svg>
    ),
    R: (
      <svg viewBox="0 0 65.17 72.81">
        <path fill="#eec11b" d="M38.02 0l27.15 37.09-26.68 35.72-28.04-36.19L38.02 0z" />
        <path fill="#231f20" d="M27.55 3.36l24.68 33.72-24.22 32.43-25.5-32.9 25-33.25M27.58 0L0 36.62l28.08 36.19 26.64-35.72L27.58 0z" />
      </svg>
    ),
    S: (
      <svg viewBox="0 0 73 73">
        <path fill="#8cd211" d="M73 66.5H11.28l18-33.25L11.28 0H73L54 33.25 73 66.5z" />
        <path fill="#152935" d="M58.27 8.5L41 38.76l-.57 1 .57 1L58.27 71H3.36l16.4-30.3.52-1-.52-1L3.36 8.5h54.91m3.45-2H0l18 33.25L0 73h61.72l-19-33.25 19-33.25z" />
      </svg>
    ),
    T: (
      <svg viewBox="0 0 50.44 63.75">
        <path fill="#efc100" d="M8.26 0h42.18v56.16H8.26z" />
        <path fill="#152935" d="M44.19 63.75H0V5.59h44.19v58.16zM2 61.75h40.19V7.59H2v54.16z" />
      </svg>
    ),
    Y: (
      <svg viewBox="0 0 73 60.41">
        <path fill="#e71d32" d="M32.05 60.41L16.02 32.38 0 4.35l32.29.14 32.29.14-16.27 27.89-16.26 27.89z" />
        <path fill="#152935" d="M11.88 2.01l28.82.13 28.83.13L55 27.17 40.48 52.08l-14.3-25-14.3-25m-3.46-2l16 28 16 28 16.31-27.91L73 .28 40.71.14 8.42 0z" />
      </svg>
    )
  }

  render() {
    return (
      <div>{this.state[this.props.letter]}</div>
    );
  }
}

export default LetterSVG;
