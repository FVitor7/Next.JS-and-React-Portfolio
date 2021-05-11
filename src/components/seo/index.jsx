import { NextSeo } from 'next-seo';

export default function SeoConfig() {
    return (
        <>
            <NextSeo
                title = 'Fábio Vitor'
                titleTemplate = '%s | Desenvolvedor Web'
                description="Desenvolvedor FullStack. Next.Js, React.Js, Node.Js, Django, Flask e Sass."
                robotsProps={{
                    nosnippet: true,
                    notranslate: true,
                    noimageindex: true,
                    noarchive: true,
                    maxSnippet: -1,
                    maxImagePreview: 'none',
                    maxVideoPreview: -1,
                }}
                additionalLinkTags={[
                    {
                        rel: 'linkedin',
                        href: 'https://www.linkedin.com/in/fvitor7',
                    },
                    {
                        rel: 'github',
                        href: 'https://github.com/FVitor7',
                    },
                    {
                        rel: 'facebook',
                        href: 'https://www.facebook.com/fabiov7',
                    }
                ]}
                additionalMetaTags={[{
                    property: 'dc:creator',
                    content: 'Fábio Vitor'
                  }, {
                    name: 'application-name',
                    content: 'Fábio Vitor | Desenvolvedor Web'
                  }, {
                    httpEquiv: 'x-ua-compatible',
                    content: 'IE=edge; chrome=1'
                  }]}
            />
        </>
    )
};
