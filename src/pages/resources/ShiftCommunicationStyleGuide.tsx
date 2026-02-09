import Footer from "@/components/Footer";
import Post from "@/components/ui/post";
import { PageSEO } from "@/components/SEO";
import content from "../../markdown/communication-style-guide.md?raw";

const title = 'The "Shift" Communication Style Guide: Talking Tech So People Listen';
const description =
  "Learn to talk tech so people listen. A guide to clear, effective technical communication for EDA advocacy.";
const cover = "/static/images/shift-graphic.png";

function StyleGuide() {
  return (
    <div>
      <PageSEO path="/resources/shift-communication-style-guide" title={title} description={description} image={cover} />
      <main className="flex-grow pt-32 md:pt-24 lg:pt-12">
        <Post
          title={title}
          content={content}
          cover={cover}
        />
      </main>
      <Footer />
    </div>
  );
}

export default StyleGuide;
