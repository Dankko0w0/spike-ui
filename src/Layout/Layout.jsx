function Layout({ header, sider, content, footer }) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Header - 仅在移动端显示 */}
      <header className="md:hidden">
        {header}
      </header>

      {/* Sider - 仅在 PC 端显示 */}
      <aside className="hidden md:block min-h-screen">
        {sider}
      </aside>

      {/* Main content */}
      <main className="flex-1">
          {content}
      </main>

      {/* Footer - 仅在移动端显示 */}
      <footer className="md:hidden">
        {footer}
      </footer>
    </div>
  );
}

export default Layout;
