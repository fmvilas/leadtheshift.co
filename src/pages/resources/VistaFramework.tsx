import Footer from "@/components/Footer";
import Post from "@/components/ui/post";
import { PageSEO } from "@/components/SEO";
import content from "../../markdown/vista-framework.md?raw";

const title = 'The "Shift" Vista Framework';
const description =
  "The Pilot Project Selection Matrix: a simple tool to choose your first EDA pilot using objective, strategic criteria.";
const cover = "/static/images/vista-framework.webp";

function VistaFramework() {
  return (
    <div>
      <PageSEO path="/resources/vista-framework" title={title} description={description} image={cover} />
      <main className="flex-grow pt-32 md:pt-0">
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

export default VistaFramework;
