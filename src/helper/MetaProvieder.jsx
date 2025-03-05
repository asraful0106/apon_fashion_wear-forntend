import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const MetaProvieder = ({ pageTitle, title, description, keywords, author, type, image_url, page_url, twiter_summary }) => {

    // Getting the link from the .env file
    const siteLink = import.meta.env.VITE_SITE_LINK;

    // Deafult meta data
    const deafultMeta = {
        pageTitle: "Apon Fashion Wear",
        title: "Apon Fashion Wear I A premium brand focused on quality, comfort, and design",
        description: `Established in 2018, Apon Fashion Wear brings a world-class fashion retail experience in Bangladesh.`,
        keywords: `fashion clothing brands, trendy clothing brands, stylish outfits for fall, affordable fashion brands, best clothing brands for women, luxury fashion brands, high-end clothing brands, fashion clothing online, sustainable clothing brands, eco-friendly clothing, plus-size fashion clothing, petite fashion clothing, streetwear fashion brands, vintage clothing brands, activewear fashion brands, casual clothing brands, formal wear clothing brands, party dresses online, designer fashion for women, best affordable clothing brands for women, where to buy trendy clothing online, stylish outfits for fall season 2025, comfortable casual wear for men, sustainable fashion brands for women, top luxury fashion brands 2025, best eco-friendly clothing brands, shop women’s summer dresses online, high-quality denim brands for men, fashionable sweaters for winter, women’s casual wear outfits, athletic wear for women, summer dresses for women, coats and jackets for winter, spring fashion 2025, fall fashion trends, summer outfit ideas, winter wardrobe essentials, fashion trends 2025, latest clothing trends, 2025 fashion must-haves, best outfits for holiday, Apon Fashion Wear clothing`,
        author: "Apon Fashion Wear",
        type: "Clothing Brand",
        image_url: `${siteLink}/uploads/asraful.jpg`,
        page_url: `${siteLink}`,
        twiter_summary: `Established in 2018, Apon Fashion Wear brings a world-class fashion retail experience in Bangladesh.`,
    }

    pageTitle = pageTitle ?? deafultMeta.pageTitle;
    title = title ?? deafultMeta.title;
    description = description ?? deafultMeta.description;
    keywords = keywords ?? deafultMeta.keywords;
    author = author ?? deafultMeta.author;
    type = type ?? deafultMeta.type;
    image_url = image_url ?? deafultMeta.image_url;
    page_url = page_url ? `${siteLink}/${page_url}` : deafultMeta.page_url;
    twiter_summary = twiter_summary ?? deafultMeta.twiter_summary;
    return (
        <Helmet>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta property="og:title" content={title} />
            <meta property="og:type" content={type} />
            <meta property="og:image" content={image_url} />
            <meta property="og:url" content={page_url} />
            <meta name="twitter:card" content={twiter_summary} />
            <title>{pageTitle}</title>
        </Helmet>
    );
};

MetaProvieder.propTypes = {
    pageTitle: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
    author: PropTypes.string,
    type: PropTypes.string,
    image_url: PropTypes.string,
    page_url: PropTypes.string,
    twiter_summary: PropTypes.string,
}

export default MetaProvieder;