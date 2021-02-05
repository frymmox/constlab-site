if (document.querySelector('.favorite-clients')) {
  setInterval(() => {
    if (document.querySelector('.js-oneFirst').classList.contains('in')) {
      document.querySelector('.js-oneFirst').classList.remove('in')
      document.querySelector('.js-oneFirst').classList.add('out')
    } else {
      document.querySelector('.js-oneFirst').classList.remove('out')
      document.querySelector('.js-oneFirst').classList.add('in')
    }

    if (document.querySelector('.js-oneLast').classList.contains('out')) {
      document.querySelector('.js-oneLast').classList.remove('out')
      document.querySelector('.js-oneLast').classList.add('in')
    } else {
      document.querySelector('.js-oneLast').classList.remove('in')
      document.querySelector('.js-oneLast').classList.add('out')
    }
  }, 7000)

  setTimeout(() => {
    setInterval(() => {
      if (document.querySelector('.js-twoFirst').classList.contains('in')) {
        document.querySelector('.js-twoFirst').classList.remove('in')
        document.querySelector('.js-twoFirst').classList.add('out')
      } else {
        document.querySelector('.js-twoFirst').classList.remove('out')
        document.querySelector('.js-twoFirst').classList.add('in')
      }

      if (document.querySelector('.js-twoLast').classList.contains('out')) {
        document.querySelector('.js-twoLast').classList.remove('out')
        document.querySelector('.js-twoLast').classList.add('in')
      } else {
        document.querySelector('.js-twoLast').classList.remove('in')
        document.querySelector('.js-twoLast').classList.add('out')
      }
    }, 7000)
  }, 700)

  setTimeout(() => {
    setInterval(() => {
      if (document.querySelector('.js-threeFirst').classList.contains('in')) {
        document.querySelector('.js-threeFirst').classList.remove('in')
        document.querySelector('.js-threeFirst').classList.add('out')
      } else {
        document.querySelector('.js-threeFirst').classList.remove('out')
        document.querySelector('.js-threeFirst').classList.add('in')
      }

      if (document.querySelector('.js-threeLast').classList.contains('out')) {
        document.querySelector('.js-threeLast').classList.remove('out')
        document.querySelector('.js-threeLast').classList.add('in')
      } else {
        document.querySelector('.js-threeLast').classList.remove('in')
        document.querySelector('.js-threeLast').classList.add('out')
      }
    }, 7000)
  }, 1400)

  setTimeout(() => {
    setInterval(() => {
      if (document.querySelector('.js-fourFirst').classList.contains('in')) {
        document.querySelector('.js-fourFirst').classList.remove('in')
        document.querySelector('.js-fourFirst').classList.add('out')
      } else {
        document.querySelector('.js-fourFirst').classList.remove('out')
        document.querySelector('.js-fourFirst').classList.add('in')
      }

      if (document.querySelector('.js-fourLast').classList.contains('out')) {
        document.querySelector('.js-fourLast').classList.remove('out')
        document.querySelector('.js-fourLast').classList.add('in')
      } else {
        document.querySelector('.js-fourLast').classList.remove('in')
        document.querySelector('.js-fourLast').classList.add('out')
      }
    }, 7000)
  }, 2100)

  setTimeout(() => {
    setInterval(() => {
      if (document.querySelector('.js-fiveFirst').classList.contains('in')) {
        document.querySelector('.js-fiveFirst').classList.remove('in')
        document.querySelector('.js-fiveFirst').classList.add('out')
      } else {
        document.querySelector('.js-fiveFirst').classList.remove('out')
        document.querySelector('.js-fiveFirst').classList.add('in')
      }

      if (document.querySelector('.js-fiveLast').classList.contains('out')) {
        document.querySelector('.js-fiveLast').classList.remove('out')
        document.querySelector('.js-fiveLast').classList.add('in')
      } else {
        document.querySelector('.js-fiveLast').classList.remove('in')
        document.querySelector('.js-fiveLast').classList.add('out')
      }
    }, 7000)
  }, 2800)

  setTimeout(() => {
    setInterval(() => {
      if (document.querySelector('.js-sixFirst').classList.contains('in')) {
        document.querySelector('.js-sixFirst').classList.remove('in')
        document.querySelector('.js-sixFirst').classList.add('out')
      } else {
        document.querySelector('.js-sixFirst').classList.remove('out')
        document.querySelector('.js-sixFirst').classList.add('in')
      }

      if (document.querySelector('.js-sixLast').classList.contains('out')) {
        document.querySelector('.js-sixLast').classList.remove('out')
        document.querySelector('.js-sixLast').classList.add('in')
      } else {
        document.querySelector('.js-sixLast').classList.remove('in')
        document.querySelector('.js-sixLast').classList.add('out')
      }
    }, 7000)
  }, 3500)

  setTimeout(() => {
    setInterval(() => {
      if (document.querySelector('.js-sevenFirst').classList.contains('in')) {
        document.querySelector('.js-sevenFirst').classList.remove('in')
        document.querySelector('.js-sevenFirst').classList.add('out')
      } else {
        document.querySelector('.js-sevenFirst').classList.remove('out')
        document.querySelector('.js-sevenFirst').classList.add('in')
      }

      if (document.querySelector('.js-sevenLast').classList.contains('out')) {
        document.querySelector('.js-sevenLast').classList.remove('out')
        document.querySelector('.js-sevenLast').classList.add('in')
      } else {
        document.querySelector('.js-sevenLast').classList.remove('in')
        document.querySelector('.js-sevenLast').classList.add('out')
      }
    }, 7000)
  }, 4200)

  setTimeout(() => {
    setInterval(() => {
      if (document.querySelector('.js-eightFirst').classList.contains('in')) {
        document.querySelector('.js-eightFirst').classList.remove('in')
        document.querySelector('.js-eightFirst').classList.add('out')
      } else {
        document.querySelector('.js-eightFirst').classList.remove('out')
        document.querySelector('.js-eightFirst').classList.add('in')
      }

      if (document.querySelector('.js-eightLast').classList.contains('out')) {
        document.querySelector('.js-eightLast').classList.remove('out')
        document.querySelector('.js-eightLast').classList.add('in')
      } else {
        document.querySelector('.js-eightLast').classList.remove('in')
        document.querySelector('.js-eightLast').classList.add('out')
      }
    }, 7000)
  }, 4900)

  setTimeout(() => {
    setInterval(() => {
      if (document.querySelector('.js-nineFirst').classList.contains('in')) {
        document.querySelector('.js-nineFirst').classList.remove('in')
        document.querySelector('.js-nineFirst').classList.add('out')
      } else {
        document.querySelector('.js-nineFirst').classList.remove('out')
        document.querySelector('.js-nineFirst').classList.add('in')
      }

      if (document.querySelector('.js-nineLast').classList.contains('out')) {
        document.querySelector('.js-nineLast').classList.remove('out')
        document.querySelector('.js-nineLast').classList.add('in')
      } else {
        document.querySelector('.js-nineLast').classList.remove('in')
        document.querySelector('.js-nineLast').classList.add('out')
      }
    }, 7000)
  }, 5600)

  setTimeout(() => {
    setInterval(() => {
      if (document.querySelector('.js-tenFirst').classList.contains('in')) {
        document.querySelector('.js-tenFirst').classList.remove('in')
        document.querySelector('.js-tenFirst').classList.add('out')
      } else {
        document.querySelector('.js-tenFirst').classList.remove('out')
        document.querySelector('.js-tenFirst').classList.add('in')
      }

      if (document.querySelector('.js-tenLast').classList.contains('out')) {
        document.querySelector('.js-tenLast').classList.remove('out')
        document.querySelector('.js-tenLast').classList.add('in')
      } else {
        document.querySelector('.js-tenLast').classList.remove('in')
        document.querySelector('.js-tenLast').classList.add('out')
      }
    }, 7000)
  }, 6300)
}
