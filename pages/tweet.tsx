interface Props {
    children: React.ReactNode;
}

export default function Tweet({ children }: Props) {
    if(typeof children === 'string'){
      return (
          <p dangerouslySetInnerHTML={{ __html: children.replace(/(#\S+)/g, "<span class='text-blue-500'>$1</span>"), }}/> 
      )
    }
    return <p>{children}</p>
  }