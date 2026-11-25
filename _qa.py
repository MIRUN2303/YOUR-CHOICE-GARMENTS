from playwright.sync_api import sync_playwright
pages=['index','products','product','manufacturing','about','wholesale','customisation','contact','hac','store','blog','blog-post']
with sync_playwright() as p:
    b=p.chromium.launch(channel='chrome')
    for width in (390,768,1440):
        pg=b.new_page(viewport={'width':width,'height':900}, is_mobile=(width<600), has_touch=(width<600))
        print('--- width',width)
        for name in pages:
            url=f'http://localhost:8123/{name}.html' + ('?id=hoodie' if name=='product' else '') + ('?id=tiruppur-garment-hub' if name=='blog-post' else '')
            errs=[]
            pg.on('console', lambda msg: errs.append(msg.text) if msg.type=='error' else None)
            pg.goto(url,wait_until='networkidle')
            pg.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            pg.wait_for_timeout(600)
            res=pg.evaluate("""() => {
              const bad=[...document.images].filter(i=>i.complete && i.naturalWidth===0).map(i=>i.getAttribute('src'));
              return {sw:document.documentElement.scrollWidth, w:innerWidth, bad:bad};
            }""")
            flag = 'OVERFLOW' if res['sw']>res['w']+1 else 'ok'
            print(f"{name:14} {flag:8} scrollW={res['sw']} badImgs={res['bad']} errors={errs}")
            pg.evaluate("window.scrollTo(0,0)")
        pg.close()
    b.close()
