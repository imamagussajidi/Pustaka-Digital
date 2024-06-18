const Section = ({ children, ...rest }) => {
  return <section style={{ paddingInline: "3rem", width: "100%" }} {...rest}>{children}</section>;
}

export default Section