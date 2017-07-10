const $ = require('jquery')
const {polymer_ext} = require('libs_frontend/polymer_utils')

const {
  log_action,
} = require('libs_frontend/intervention_log_utils')

polymer_ext({
  is: 'positive-site-trigger',
  properties: {
    positiveSite: {
      type: String,
      value: 'Duolingo'
    },
    positiveSiteIcon: {
      type: String,
      value: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjQzIiBoZWlnaHQ9IjI1MDAiIHZpZXdCb3g9IjAgMCAyMjEuNTQxIDI0Ni45NjEiPjxwYXRoIGZpbGw9IiM3OEM4MDAiIGQ9Ik03NC43NzEgMGMyMC40MDUgMCAyNS4yNTkgMjcuMTEyIDY1LjUxMyAyNy4xMTIgMjUuNDAyIDAgMjYuODI1LTEwLjUwMSAzOC41MzMtMTAuNTAxIDQuNzg2IDAgNy41MDcgOS4xNiA3LjUwNyAxNS4yNjcgMCAyNC4xMzgtNi4xOTcgNTEuMTIzLTIuMTcyIDUxLjEyMyA1LjI3NSAwIDI2LjY5Ni0xMy44MzIgMzIuMjQ4LTEzLjgzMiA1LjI3NSAwIDUuMTM2IDQuMDk1IDUuMTM2IDYuMzg1czEuNjIxIDQyLjI4Ny01Mi41MTQgNzMuNzk3Yy0yLjM2IDEuMzg4LTEzLjgzNSA1MS4zNTQtNTQuMjc0IDUxLjM1NC0yNy4wMjEgMC00Ny41NjQtMTQuNjE3LTU1LjQzMS00OS41OTdDNTcuNzQ0IDE0My44OTEgMCAxMjEuMTI2IDAgNzAuOTdjMC0xMS4wMTIgMi43NzYtMTcuMDI3IDcuMDMzLTE3LjAyNyAxMC42NDMgMCAzMy40MDcgMTcuODYgNDMuMjE2IDE3Ljg2IDguNDkgMCA3LjEyNS0xOC41MDggNy4xMjUtMjQuMDZDNTcuMzc0IDQyLjE5MyA1Ni45MTEgMCA3NC43NzEgMHoiLz48cGF0aCBmaWxsPSIjOEVFMDAwIiBkPSJNMTY4LjY3MSAzNS41OTdjLTMuNjc4IDAtNC41NjcgMS44OTgtNS44NzMuNzEyLS41OTMtLjU5MyAyLjU1Mi0xLjk1OCAyLjU1Mi0yLjU1MSAwLS4yOTctLjQ3Ni0uMjM3LTEuMTI3LS4yMzctMy44NTYgMC0xMS40NSA1LjYzNi0xMi41MTkgNS42MzYtLjQ3NSAwLTEuMjQ2LjExOS0xLjI0Ni0uNTkzIDAtMS42MDIgNS4zOTktMi45NjYgMS42NjEtMi45NjZzLTkuMjU1IDQuODA2LTE1LjAxIDQuODA2Yy0xMS44NjYgMC0yMS40MTctOS4zMTQtMjEuNDE3LTcuMDAxIDAgLjgzMSAxLjM2NSAyLjEzNiAyLjI1NCAzLjc5NyAwIDAgLjUzNCAyLjQ5Mi0uNDc1IDEuNTQzLTEwLjg4OC0xMC44ODctMjEuNzczLTEzLjUyNy0yMS43NzMtMTMuNTI3cy0uODMxIDAtLjgzMS4zNTZjMCAxLjI0NiAyLjM3MyAyLjkwNyAyLjM3MyAzLjM4MiAwIC40NzUtLjI5Ny43NzEtLjc3MS43NzEtMi4zMTQgMC0zLjk3Ni00LjQ1LTEzLjI4OS00LjQ1LTE0LjA2MiAwLTE3LjkzNSAyMi4xMjktMTcuOTM1IDQwLjI4NCAwIDI1Ljc0OCAxNi41NjkgMzMuOTI5IDMwLjI3NCAzMy45MjkgMTAuODY5IDAgMjIuNTA2LTYuNDA3IDI3LjM3Ni0xNS44MTZsMTQuNDY0IDEuMTAyczcuMDkxIDEzLjQzOSAxOS44NDYgMTMuNDM5YzExLjk3MSAwIDIyLjM4MS03LjU3NCAyMi4zODEtMzMuODQyLjAwMi0yNy41ODctNy4yMzUtMjguNzc0LTEwLjkxNS0yOC43NzR6Ii8+PGVsbGlwc2UgZmlsbD0iI0ZGRiIgY3g9Ijk0LjA0IiBjeT0iNjYuNjM3IiByeD0iMTguNTA4IiByeT0iMjIuNTAzIi8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE3Mi44MTcgNzAuODg1Yy0uNTg2IDEwLjkzMi03Ljk3OCAxOS41NjItMTYuNTA5IDE5LjI3NS04LjUzMi0uMjg3LTE0Ljk3NS05LjM4Mi0xNC4zODktMjAuMzE1LjU4Ni0xMC45MzIgNy45NzgtMTkuNTYyIDE2LjUxLTE5LjI3NSA4LjUzMi4yODcgMTQuOTc0IDkuMzgyIDE0LjM4OCAyMC4zMTV6Ii8+PGVsbGlwc2UgZmlsbD0iIzNGM0YzRiIgY3g9IjkzLjY1OSIgY3k9IjY2LjYzNyIgcng9IjEwLjE2NyIgcnk9IjEyLjM2MiIvPjxlbGxpcHNlIGZpbGw9IiNGRkYiIGN4PSI4Ny4wNjkiIGN5PSI1OC43OTUiIHJ4PSI0Ljc2MiIgcnk9IjUuMTQ1Ii8+PHBhdGggZmlsbD0iIzNGM0YzRiIgZD0iTTE2NS44NDYgNzAuODgyYy0uNDY2IDYuNDI3LTQuNzYxIDExLjQ0OS05LjU5NCAxMS4yMTgtNC44MzMtLjIzMS04LjM3NS01LjYyOS03LjkxLTEyLjA1Ni40NjUtNi40MjcgNC43Ni0xMS40NDkgOS41OTMtMTEuMjE4IDQuODMzLjIzMSA4LjM3NSA1LjYyOSA3LjkxMSAxMi4wNTZ6Ii8+PHBhdGggZmlsbD0iIzcxQjIwMCIgZD0iTTExNy42OTUgOTIuNTc2cy0yLjk3MyAyNC44OCA1LjE2OCAyNC43MDhjOC4xNDEtLjE3MiA3Ljc5NC0xMi4wOTQgNy43NDMtMTIuMjM2LS4wNS0uMTQzLTEyLjkxMS0xMi40NzItMTIuOTExLTEyLjQ3MnoiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTU1Ljc1MyA2My4zOThjLjA4MyAyLjYyLTEuNzQzIDQuODAzLTQuMDgxIDQuODc1LTIuMzM3LjA3Mi00LjI5OC0xLjk5NC00LjM4MS00LjYxNXMxLjc0NC00LjgwMyA0LjA4MS00Ljg3NWMyLjMzNi0uMDcxIDQuMjk4IDEuOTk1IDQuMzgxIDQuNjE1eiIvPjxwYXRoIGZpbGw9IiM3MUIyMDAiIGQ9Ik0yMTIuMjk3IDEwNy44MzljLTEwLjY5MyAxNS42MDItMzMuMDc3IDI3LjkxMi0zNi43NTEgMjcuOTEyLTQuMTYzIDAtMS4yOTYtNC40NDItNC4yNTctNC40NDItMi42ODQgMC0zLjIzOCA0Ni43MjctNTEuMDgxIDQ2LjcyNy01My43NjUgMC01Mi41NjItNTUuNjExLTU3Ljc0NC01NS42MTEtMy43OTQgMC0xLjI5NiA4LjE0My01LjM2NiA4LjE0My0xMy42IDAtNDkuODE4LTI3LjQ4Ni01NS44MzgtNDcuMDE2IDguNDQ0IDQxLjQ1MiA1Ni42MjQgNjAuOTc1IDU4LjA1OSA2Ny41NTkgNy44NjYgMzQuOTggMjguNDA5IDQ5LjU5NiA1NS40MzEgNDkuNTk2IDQwLjQzOSAwIDUxLjkxNC00OS45NjYgNTQuMjc0LTUxLjM1NCAyMi4zNDMtMTMuMDA3IDM1LjUxMS0yOC4xMDQgNDMuMjczLTQxLjUxNHoiLz48cGF0aCBmaWxsPSIjRjQ5MDAwIiBkPSJNMTE3LjY5NiA5MC4wMzNzLTEuNzUgMTguMTkzIDcuMTA3IDE4LjE5M2M4Ljg1NiAwIDEzLjI2LTcuMjY2IDEzLjI2LTEzLjc5IDAtNi41MjQtMjAuMzY3LTQuNDAzLTIwLjM2Ny00LjQwM3oiLz48cGF0aCBmaWxsPSIjRkZDMjAwIiBkPSJNMTMxLjAxIDc5LjI2NmM2LjQ0MyAwIDExLjI5NyA3LjQ3OSAxMS4yOTcgMTQuODc4cy02LjA0NyAxNC45NTctOC4wMzYgMTQuOTU3LTE2LjYyOC0xMy42MDUtMTYuNjI4LTE5LjQxMyA1LjU2OS0xMC40MjIgMTMuMzY3LTEwLjQyMnoiLz48ZWxsaXBzZSB0cmFuc2Zvcm09InJvdGF0ZSgtODYuODM2IDEzMC43OSA4My42KSIgZmlsbD0iI0ZGRjNCOCIgY3g9IjEzMC43OTQiIGN5PSI4My42MDIiIHJ4PSIyLjMzNCIgcnk9IjQuMjgiLz48cGF0aCBmaWxsPSIjRDk4NTAwIiBkPSJNMTA2Ljc2MiAyMDcuNDY1YzYuOTE5LS4zNjMgMTEuODg0IDEuMTEgMTIuMjA5IDcuMzIxLjMyNCA2LjIxMi04LjEwNCA3LjgzNy0xMi41ODUgOC4wNzFzLTkuNTU1LTEuNzg1LTkuNzg5LTYuMjY4Yy0uMjM1LTQuNDc5IDMuOTE1LTguNzk2IDEwLjE2NS05LjEyNHpNMTQ5LjI3IDE5NC43NjRjNi42MDQtLjM0NiA2Ljc0MyA2LjgyIDYuNzcxIDcuMzcxLjAyOS41NS43MDYgNy40NTEtMTAuODUxIDguMDU5LTcuMzEyLjM4My03LjA5LTIuOS03LjE3NC00LjUxMnMyLjg4LTEwLjQ3OCAxMS4yNTQtMTAuOTE4eiIvPjxlbGxpcHNlIGZpbGw9IiNFMEUwRTAiIGN4PSIxMTQuOTA4IiBjeT0iMjQxLjM4MiIgcng9IjU5LjYzMyIgcnk9IjUuNTc5Ii8+PC9zdmc+'
      /*value: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAklEQVR4AewaftIAAAIZSURBVH3BT0hTcQDA8e/v995zqFtMJ0lCLO1gtBplUmmBB9M8pYeo6GI1gi6dugy62CkP8xIRQX8u6+CpS4fC0EPEHhZYEQW7aIFFf9Cmi7b33t7vlzMYblafj6BG0qbMBdJAYryH/xLUSNo8kZLjQoLyWdCaDqpNAYPjPawzqSEEHc0RkAYoRXuhgHaLIA0wTfA8cB0qZNKmimkRDAd2MLLlGX2RFI2N0BSB1uYm9reeIhy22MgEVpI2i0CMNVISiYcu8fDuC6LRKMFDbfz0P9Mr7zOdnmffaAtPv96iLGmDCYSA3YAGisqnbrW0QH19nJ2d23lZyrGrFGFpZYlsNktcS8qSNreBc0bvKCeFwVb+MJWCZfWKzu4QHwP3iM9/os9r4F3wOQeG48x+uYPj+mNAN7BoKodHwB5pUZHLKTL5SbQGfkC0YYm3GvIrN9CaCq14YGTSTB8+zbBWbJMWaA1CgNagNXyrBzsArqSKcvigPIYla4RJl/aYcZbBy1FFmCAMKnwHvDzflUd7qh8EG1yZAlVEWWGEtNhEa/BWeS8NYqkB1kk2mBgEUcfrUh7QbOL/IidNYqkBKiQ1pEGX8sFZBr8AygW/CG4OtGIydYwqBjUyaThynhblcVA54BdBOWAYzE0McYIaBn9hp3l8NMG1kKIdi2ydyd7EHGOX+5m4OUMVyT9cnIWzbxi5MMeZ60OUtXVeZZPfJ6/KTVT4IxUAAAAASUVORK5CYII='*/
    },
    streak: {
      type: Number,
      value: 0
    },
    completingTime: {
      type: Number,
      value: 5
    },
  },
  goClicked: function() {
    console.log('go button clicked!')
    log_action({'positive': 'Went to positive site.'})
    window.location.href = 'https://www.duolingo.com'
  },
})