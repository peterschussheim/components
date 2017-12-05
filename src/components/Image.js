import glamorous from 'glamorous'

export default glamorous.img(
  {
    border: '0',
    verticalAlign: 'middle',
    width: '20vw'
  },
  ({ rounded }) =>
    rounded
      ? {
          borderRadius: typeof rounded === 'number' ? rounded : 6
        }
      : null,
  ({ faded }) => (faded ? { opacity: 0.7 } : null),
  ({ avatar }) => (avatar ? { width: '7vw' } : null)
)
