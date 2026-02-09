import Footer from "@/components/Footer";
import Post from "@/components/ui/post";
import { PageSEO } from "@/components/SEO";
import content from "../../markdown/eda-complexity-management-checklist.md?raw";

const title = "EDA Complexity Management Checklist";
const description =
  "A practical checklist to assess and improve how you manage complexity in your Event-Driven Architecture.";
const cover = "/static/images/cube.webp";

function ManagementChecklist() {
  return (
    <div>
      <PageSEO path="/resources/management-checklist" title={title} description={description} image={cover} />
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

export default ManagementChecklist;
