import GutteredWide from '../_layouts/GutteredWide'

export default function Layout({
    children, // will be a page or nested layout
  }) {
    return (
      <GutteredWide>   
        {children}
      </GutteredWide>
    )
  }