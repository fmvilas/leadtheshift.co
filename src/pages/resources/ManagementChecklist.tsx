import Footer from "@/components/Footer";
import Post from "@/components/ui/post";
import content from "../../markdown/eda-complexity-management-checklist.md?raw";

function ManagementChecklist() {
  return (
    <div>
      <main className="flex-grow pt-32 md:pt-0">
        <Post
          title={`EDA Complexity Management Checklist`}
          content={content}
          cover={"/static/images/cube.webp"}
        />
      </main>
      <Footer />
    </div>
  );
}

export default ManagementChecklist;
