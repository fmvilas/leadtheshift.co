import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Post from "@/components/ui/post";
import content from "../../markdown/communication-style-guide.md?raw";

function StyleGuide() {
  return (
    <div>
      <main className="flex-grow pt-32 md:pt-24 lg:pt-12">
        <Post
          title={`The "Shift" Communication Style Guide: Talking Tech So People Listen`}
          content={content}
          cover={"/static/images/shift-graphic.png"}
        />
      </main>
      <Footer />
    </div>
  );
}

export default StyleGuide;
