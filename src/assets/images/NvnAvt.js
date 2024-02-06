import * as React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {
    opacity: 1,
    scale: 1,
  },
  visible: {
    opacity: 0,
    scale: 0,
    transition: {
      delay: 4,
      duration: 0.3,
    },
  },
};

const svg = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "afterChildren",
      duration: 0.1,
      delay: 3,
      staggerChildren: 0.2,
    },
  },
};

const path = (strokeDashoffset) => ({
  hidden: { strokeDashoffset },
  visible: {
    strokeDashoffset: 0,
  },
});

const pathProps = {
  variants: path(200),
  transition: {
    duration: 1,
  },
};

const NvnAvt = (props) => {
  return (
    <>
      <motion.div variants={container} initial="hidden" animate="visible">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="335"
          height="61"
          viewBox="0 0 335 61"
          fill="none"
          variants={svg}
          initial="hidden"
          animate="visible"
          {...props}
        >
          <g
            fill="none"
            stroke="#fff"
            strokeWidth={1}
            strokeMiterlimit={10}
            strokeDasharray={200}
          >
            <motion.path
              {...pathProps}
              clipPath="url(#n)"
              d="M26.2727 7.72727V31H23.5455L10.8636 12.7273H10.6364V31H7.81818V7.72727H10.5455L23.2727 26.0455H23.5V7.72727H26.2727ZM36.6847 31.4091C35.5786 31.4091 34.5748 31.2008 33.6733 30.7841C32.7718 30.3598 32.0559 29.75 31.5256 28.9545C30.9953 28.1515 30.7301 27.1818 30.7301 26.0455C30.7301 25.0455 30.9271 24.2348 31.321 23.6136C31.715 22.9848 32.2415 22.4924 32.9006 22.1364C33.5597 21.7803 34.2869 21.5152 35.0824 21.3409C35.8854 21.1591 36.6922 21.0152 37.5028 20.9091C38.5634 20.7727 39.4233 20.6705 40.0824 20.6023C40.7491 20.5265 41.2339 20.4015 41.5369 20.2273C41.8475 20.053 42.0028 19.75 42.0028 19.3182V19.2273C42.0028 18.1061 41.696 17.2348 41.0824 16.6136C40.4763 15.9924 39.5559 15.6818 38.321 15.6818C37.0407 15.6818 36.0369 15.9621 35.3097 16.5227C34.5824 17.0833 34.071 17.6818 33.7756 18.3182L31.2301 17.4091C31.6847 16.3485 32.2907 15.5227 33.0483 14.9318C33.8134 14.3333 34.6468 13.9167 35.5483 13.6818C36.4574 13.4394 37.3513 13.3182 38.2301 13.3182C38.7907 13.3182 39.4347 13.3864 40.1619 13.5227C40.8968 13.6515 41.6051 13.9205 42.2869 14.3295C42.9763 14.7386 43.5483 15.3561 44.0028 16.1818C44.4574 17.0076 44.6847 18.1136 44.6847 19.5V31H42.0028V28.6364H41.8665C41.6847 29.0152 41.3816 29.4205 40.9574 29.8523C40.5331 30.2841 39.9688 30.6515 39.2642 30.9545C38.5597 31.2576 37.6998 31.4091 36.6847 31.4091ZM37.0938 29C38.1544 29 39.0483 28.7917 39.7756 28.375C40.5104 27.9583 41.0634 27.4205 41.4347 26.7614C41.8134 26.1023 42.0028 25.4091 42.0028 24.6818V22.2273C41.8892 22.3636 41.6392 22.4886 41.2528 22.6023C40.8741 22.7083 40.4347 22.803 39.9347 22.8864C39.4422 22.9621 38.9612 23.0303 38.4915 23.0909C38.0294 23.1439 37.6544 23.1894 37.3665 23.2273C36.6695 23.3182 36.018 23.4659 35.4119 23.6705C34.8134 23.8674 34.3286 24.1667 33.9574 24.5682C33.5938 24.9621 33.4119 25.5 33.4119 26.1818C33.4119 27.1136 33.7566 27.8182 34.446 28.2955C35.143 28.7652 36.0256 29 37.0938 29ZM63.2273 13.5455L56.7727 31H54.0455L47.5909 13.5455H50.5L55.3182 27.4545H55.5L60.3182 13.5455H63.2273Z"
            />
            <motion.path
              {...pathProps}
              clipPath="url(#a)"
              d="M129.818 7.72727H133.182L141.091 27.0455H141.364L149.273 7.72727H152.636V31H150V13.3182H149.773L142.5 31H139.955L132.682 13.3182H132.455V31H129.818V7.72727Z"
            />
            <motion.path
              {...pathProps}
              clipPath="url(#v)"
              d="M164.591 31.4091C163.485 31.4091 162.481 31.2008 161.58 30.7841C160.678 30.3598 159.962 29.75 159.432 28.9545C158.902 28.1515 158.636 27.1818 158.636 26.0455C158.636 25.0455 158.833 24.2348 159.227 23.6136C159.621 22.9848 160.148 22.4924 160.807 22.1364C161.466 21.7803 162.193 21.5152 162.989 21.3409C163.792 21.1591 164.598 21.0152 165.409 20.9091C166.47 20.7727 167.33 20.6705 167.989 20.6023C168.655 20.5265 169.14 20.4015 169.443 20.2273C169.754 20.053 169.909 19.75 169.909 19.3182V19.2273C169.909 18.1061 169.602 17.2348 168.989 16.6136C168.383 15.9924 167.462 15.6818 166.227 15.6818C164.947 15.6818 163.943 15.9621 163.216 16.5227C162.489 17.0833 161.977 17.6818 161.682 18.3182L159.136 17.4091C159.591 16.3485 160.197 15.5227 160.955 14.9318C161.72 14.3333 162.553 13.9167 163.455 13.6818C164.364 13.4394 165.258 13.3182 166.136 13.3182C166.697 13.3182 167.341 13.3864 168.068 13.5227C168.803 13.6515 169.511 13.9205 170.193 14.3295C170.883 14.7386 171.455 15.3561 171.909 16.1818C172.364 17.0076 172.591 18.1136 172.591 19.5V31H169.909V28.6364H169.773C169.591 29.0152 169.288 29.4205 168.864 29.8523C168.439 30.2841 167.875 30.6515 167.17 30.9545C166.466 31.2576 165.606 31.4091 164.591 31.4091ZM165 29C166.061 29 166.955 28.7917 167.682 28.375C168.417 27.9583 168.97 27.4205 169.341 26.7614C169.72 26.1023 169.909 25.4091 169.909 24.6818V22.2273C169.795 22.3636 169.545 22.4886 169.159 22.6023C168.78 22.7083 168.341 22.803 167.841 22.8864C167.348 22.9621 166.867 23.0303 166.398 23.0909C165.936 23.1439 165.561 23.1894 165.273 23.2273C164.576 23.3182 163.924 23.4659 163.318 23.6705C162.72 23.8674 162.235 24.1667 161.864 24.5682C161.5 24.9621 161.318 25.5 161.318 26.1818C161.318 27.1136 161.663 27.8182 162.352 28.2955C163.049 28.7652 163.932 29 165 29Z"
            />
            <motion.path
              {...pathProps}
              clipPath="url(#e)"
              d="M239.455 31V13.5455H242.045V16.2727H242.273C242.636 15.3409 243.223 14.6174 244.034 14.1023C244.845 13.5795 245.818 13.3182 246.955 13.3182C248.106 13.3182 249.064 13.5795 249.83 14.1023C250.602 14.6174 251.205 15.3409 251.636 16.2727H251.818C252.265 15.3712 252.936 14.6553 253.83 14.125C254.723 13.5871 255.795 13.3182 257.045 13.3182C258.606 13.3182 259.883 13.8068 260.875 14.7841C261.867 15.7538 262.364 17.2652 262.364 19.3182V31H259.682V19.3182C259.682 18.0303 259.33 17.1098 258.625 16.5568C257.92 16.0038 257.091 15.7273 256.136 15.7273C254.909 15.7273 253.958 16.0985 253.284 16.8409C252.61 17.5758 252.273 18.5076 252.273 19.6364V31H249.545V19.0455C249.545 18.053 249.223 17.2538 248.58 16.6477C247.936 16.0341 247.106 15.7273 246.091 15.7273C245.394 15.7273 244.742 15.9129 244.136 16.2841C243.538 16.6553 243.053 17.1705 242.682 17.8295C242.318 18.4811 242.136 19.2348 242.136 20.0909V31H239.455Z"
            />
            <motion.path
              {...pathProps}
              clipPath="url(#e)"
              d="M270.955 24.6364L270.909 21.3182H271.455L279.091 13.5455H282.409L274.273 21.7727H274.045L270.955 24.6364ZM268.455 31V7.72727H271.136V31H268.455ZM279.545 31L272.727 22.3636L274.636 20.5L282.955 31H279.545ZM292.233 31.3636C290.657 31.3636 289.275 30.9886 288.085 30.2386C286.903 29.4886 285.979 28.4394 285.312 27.0909C284.653 25.7424 284.324 24.1667 284.324 22.3636C284.324 20.5455 284.653 18.9583 285.312 17.6023C285.979 16.2462 286.903 15.1932 288.085 14.4432C289.275 13.6932 290.657 13.3182 292.233 13.3182C293.809 13.3182 295.188 13.6932 296.369 14.4432C297.559 15.1932 298.483 16.2462 299.142 17.6023C299.809 18.9583 300.142 20.5455 300.142 22.3636C300.142 24.1667 299.809 25.7424 299.142 27.0909C298.483 28.4394 297.559 29.4886 296.369 30.2386C295.188 30.9886 293.809 31.3636 292.233 31.3636ZM292.233 28.9545C293.43 28.9545 294.415 28.6477 295.188 28.0341C295.96 27.4205 296.532 26.6136 296.903 25.6136C297.275 24.6136 297.46 23.5303 297.46 22.3636C297.46 21.197 297.275 20.1098 296.903 19.1023C296.532 18.0947 295.96 17.2803 295.188 16.6591C294.415 16.0379 293.43 15.7273 292.233 15.7273C291.036 15.7273 290.051 16.0379 289.278 16.6591C288.506 17.2803 287.934 18.0947 287.562 19.1023C287.191 20.1098 287.006 21.197 287.006 22.3636C287.006 23.5303 287.191 24.6136 287.562 25.6136C287.934 26.6136 288.506 27.4205 289.278 28.0341C290.051 28.6477 291.036 28.9545 292.233 28.9545ZM311.827 13.5455V15.8182H302.781V13.5455H311.827ZM305.418 9.36364H308.099V26C308.099 26.7576 308.209 27.3258 308.429 27.7045C308.656 28.0758 308.944 28.3258 309.293 28.4545C309.649 28.5758 310.024 28.6364 310.418 28.6364C310.713 28.6364 310.955 28.6212 311.145 28.5909C311.334 28.553 311.486 28.5227 311.599 28.5L312.145 30.9091C311.963 30.9773 311.709 31.0455 311.384 31.1136C311.058 31.1894 310.645 31.2273 310.145 31.2273C309.387 31.2273 308.645 31.0644 307.918 30.7386C307.198 30.4129 306.599 29.9167 306.122 29.25C305.652 28.5833 305.418 27.7424 305.418 26.7273V9.36364Z"
            />
            <motion.path
              {...pathProps}
              clipPath="url(#n)"
              d="M326.045 13.5455V15.8182H317V13.5455H326.045ZM319.636 9.36364H322.318V26C322.318 26.7576 322.428 27.3258 322.648 27.7045C322.875 28.0758 323.163 28.3258 323.511 28.4545C323.867 28.5758 324.242 28.6364 324.636 28.6364C324.932 28.6364 325.174 28.6212 325.364 28.5909C325.553 28.553 325.705 28.5227 325.818 28.5L326.364 30.9091C326.182 30.9773 325.928 31.0455 325.602 31.1136C325.277 31.1894 324.864 31.2273 324.364 31.2273C323.606 31.2273 322.864 31.0644 322.136 30.7386C321.417 30.4129 320.818 29.9167 320.341 29.25C319.871 28.5833 319.636 27.7424 319.636 26.7273V9.36364Z"
            />
            <motion.path
              {...pathProps}
              clipPath="url(#m)"
              d="M185.045 13.5455V15.8182H176V13.5455H185.045ZM178.636 9.36364H181.318V26C181.318 26.7576 181.428 27.3258 181.648 27.7045C181.875 28.0758 182.163 28.3258 182.511 28.4545C182.867 28.5758 183.242 28.6364 183.636 28.6364C183.932 28.6364 184.174 28.6212 184.364 28.5909C184.553 28.553 184.705 28.5227 184.818 28.5L185.364 30.9091C185.182 30.9773 184.928 31.0455 184.602 31.1136C184.277 31.1894 183.864 31.2273 183.364 31.2273C182.606 31.2273 181.864 31.0644 181.136 30.7386C180.417 30.4129 179.818 29.9167 179.341 29.25C178.871 28.5833 178.636 27.7424 178.636 26.7273V9.36364Z"
            />
            <motion.path
              {...pathProps}
              clipPath="url(#a)"
              d="M192.136 20.5V31H189.455V7.72727H192.136V16.2727H192.364C192.773 15.3712 193.386 14.6553 194.205 14.125C195.03 13.5871 196.129 13.3182 197.5 13.3182C198.689 13.3182 199.731 13.5568 200.625 14.0341C201.519 14.5038 202.212 15.2273 202.705 16.2045C203.205 17.1742 203.455 18.4091 203.455 19.9091V31H200.773V20.0909C200.773 18.7045 200.413 17.6326 199.693 16.875C198.981 16.1098 197.992 15.7273 196.727 15.7273C195.848 15.7273 195.061 15.9129 194.364 16.2841C193.674 16.6553 193.129 17.197 192.727 17.9091C192.333 18.6212 192.136 19.4848 192.136 20.5ZM208.361 31V13.5455H210.952V16.1818H211.134C211.452 15.3182 212.027 14.6174 212.861 14.0795C213.694 13.5417 214.634 13.2727 215.679 13.2727C215.876 13.2727 216.122 13.2765 216.418 13.2841C216.713 13.2917 216.937 13.303 217.088 13.3182V16.0455C216.997 16.0227 216.789 15.9886 216.463 15.9432C216.145 15.8902 215.808 15.8636 215.452 15.8636C214.603 15.8636 213.846 16.0417 213.179 16.3977C212.52 16.7462 211.997 17.2311 211.611 17.8523C211.232 18.4659 211.043 19.1667 211.043 19.9545V31H208.361ZM225.403 31.4091C224.297 31.4091 223.294 31.2008 222.392 30.7841C221.491 30.3598 220.775 29.75 220.244 28.9545C219.714 28.1515 219.449 27.1818 219.449 26.0455C219.449 25.0455 219.646 24.2348 220.04 23.6136C220.434 22.9848 220.96 22.4924 221.619 22.1364C222.278 21.7803 223.006 21.5152 223.801 21.3409C224.604 21.1591 225.411 21.0152 226.222 20.9091C227.282 20.7727 228.142 20.6705 228.801 20.6023C229.468 20.5265 229.953 20.4015 230.256 20.2273C230.566 20.053 230.722 19.75 230.722 19.3182V19.2273C230.722 18.1061 230.415 17.2348 229.801 16.6136C229.195 15.9924 228.275 15.6818 227.04 15.6818C225.759 15.6818 224.756 15.9621 224.028 16.5227C223.301 17.0833 222.79 17.6818 222.494 18.3182L219.949 17.4091C220.403 16.3485 221.009 15.5227 221.767 14.9318C222.532 14.3333 223.366 13.9167 224.267 13.6818C225.176 13.4394 226.07 13.3182 226.949 13.3182C227.509 13.3182 228.153 13.3864 228.881 13.5227C229.616 13.6515 230.324 13.9205 231.006 14.3295C231.695 14.7386 232.267 15.3561 232.722 16.1818C233.176 17.0076 233.403 18.1136 233.403 19.5V31H230.722V28.6364H230.585C230.403 29.0152 230.1 29.4205 229.676 29.8523C229.252 30.2841 228.688 30.6515 227.983 30.9545C227.278 31.2576 226.419 31.4091 225.403 31.4091ZM225.812 29C226.873 29 227.767 28.7917 228.494 28.375C229.229 27.9583 229.782 27.4205 230.153 26.7614C230.532 26.1023 230.722 25.4091 230.722 24.6818V22.2273C230.608 22.3636 230.358 22.4886 229.972 22.6023C229.593 22.7083 229.153 22.803 228.653 22.8864C228.161 22.9621 227.68 23.0303 227.21 23.0909C226.748 23.1439 226.373 23.1894 226.085 23.2273C225.388 23.3182 224.737 23.4659 224.131 23.6705C223.532 23.8674 223.047 24.1667 222.676 24.5682C222.313 24.9621 222.131 25.5 222.131 26.1818C222.131 27.1136 222.475 27.8182 223.165 28.2955C223.862 28.7652 224.744 29 225.812 29Z"
            />
            <motion.path
              {...pathProps}
              clipPath="url(#t)"
              d="M73.7727 31.3636C72.0909 31.3636 70.6402 30.9924 69.4205 30.25C68.2083 29.5 67.2727 28.4545 66.6136 27.1136C65.9621 25.7652 65.6364 24.197 65.6364 22.4091C65.6364 20.6212 65.9621 19.0455 66.6136 17.6818C67.2727 16.3106 68.1894 15.2424 69.3636 14.4773C70.5455 13.7045 71.9242 13.3182 73.5 13.3182C74.4091 13.3182 75.3068 13.4697 76.1932 13.7727C77.0795 14.0758 77.8864 14.5682 78.6136 15.25C79.3409 15.9242 79.9205 16.8182 80.3523 17.9318C80.7841 19.0455 81 20.4167 81 22.0455V23.1818H67.5455V20.8636H78.2727C78.2727 19.8788 78.0758 19 77.6818 18.2273C77.2955 17.4545 76.7424 16.8447 76.0227 16.3977C75.3106 15.9508 74.4697 15.7273 73.5 15.7273C72.4318 15.7273 71.5076 15.9924 70.7273 16.5227C69.9545 17.0455 69.3598 17.7273 68.9432 18.5682C68.5265 19.4091 68.3182 20.3106 68.3182 21.2727V22.8182C68.3182 24.1364 68.5455 25.2538 69 26.1705C69.4621 27.0795 70.1023 27.7727 70.9205 28.25C71.7386 28.7197 72.6894 28.9545 73.7727 28.9545C74.4773 28.9545 75.1136 28.8561 75.6818 28.6591C76.2576 28.4545 76.7538 28.1515 77.1705 27.75C77.5871 27.3409 77.9091 26.8333 78.1364 26.2273L80.7273 26.9545C80.4545 27.8333 79.9962 28.6061 79.3523 29.2727C78.7083 29.9318 77.9129 30.447 76.9659 30.8182C76.0189 31.1818 74.9545 31.3636 73.7727 31.3636Z"
            />
            <motion.path
              {...pathProps}
              clipPath="url(#h)"
              d="M92.7727 31.3636C91.0909 31.3636 89.6402 30.9924 88.4205 30.25C87.2083 29.5 86.2727 28.4545 85.6136 27.1136C84.9621 25.7652 84.6364 24.197 84.6364 22.4091C84.6364 20.6212 84.9621 19.0455 85.6136 17.6818C86.2727 16.3106 87.1894 15.2424 88.3636 14.4773C89.5455 13.7045 90.9242 13.3182 92.5 13.3182C93.4091 13.3182 94.3068 13.4697 95.1932 13.7727C96.0795 14.0758 96.8864 14.5682 97.6136 15.25C98.3409 15.9242 98.9205 16.8182 99.3523 17.9318C99.7841 19.0455 100 20.4167 100 22.0455V23.1818H86.5455V20.8636H97.2727C97.2727 19.8788 97.0758 19 96.6818 18.2273C96.2955 17.4545 95.7424 16.8447 95.0227 16.3977C94.3106 15.9508 93.4697 15.7273 92.5 15.7273C91.4318 15.7273 90.5076 15.9924 89.7273 16.5227C88.9545 17.0455 88.3598 17.7273 87.9432 18.5682C87.5265 19.4091 87.3182 20.3106 87.3182 21.2727V22.8182C87.3182 24.1364 87.5455 25.2538 88 26.1705C88.4621 27.0795 89.1023 27.7727 89.9205 28.25C90.7386 28.7197 91.6894 28.9545 92.7727 28.9545C93.4773 28.9545 94.1136 28.8561 94.6818 28.6591C95.2576 28.4545 95.7538 28.1515 96.1705 27.75C96.5871 27.3409 96.9091 26.8333 97.1364 26.2273L99.7273 26.9545C99.4545 27.8333 98.9962 28.6061 98.3523 29.2727C97.7083 29.9318 96.9129 30.447 95.9659 30.8182C95.0189 31.1818 93.9545 31.3636 92.7727 31.3636Z"
            />
            <motion.path
              {...pathProps}
              clipPath="url(#r)"
              d="M106.136 20.5V31H103.455V13.5455H106.045V16.2727H106.273C106.682 15.3864 107.303 14.6742 108.136 14.1364C108.97 13.5909 110.045 13.3182 111.364 13.3182C112.545 13.3182 113.58 13.5606 114.466 14.0455C115.352 14.5227 116.042 15.25 116.534 16.2273C117.027 17.197 117.273 18.4242 117.273 19.9091V31H114.591V20.0909C114.591 18.7197 114.235 17.6515 113.523 16.8864C112.811 16.1136 111.833 15.7273 110.591 15.7273C109.735 15.7273 108.97 15.9129 108.295 16.2841C107.629 16.6553 107.102 17.197 106.716 17.9091C106.33 18.6212 106.136 19.4848 106.136 20.5Z"
            />
          </g>
          {/* <motion.path
            {...rectProps}
            // strokeWidth={2}
            fill="none"
            stroke="#FFF"
            // strokeMiterlimit={10}

            strokeDasharray={866}
            strokeDashoffset={866}
          /> */}
        </motion.svg>
      </motion.div>
    </>
  );
};

export default NvnAvt;
