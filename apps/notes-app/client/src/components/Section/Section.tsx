import { createArticleSchema } from "../../models/article.model";
import { CreateSectionType2, SectionType } from "../../models/section.model";
import SectionService from "../../services/section.service";
import Content from "../content/Content";

const sectionProps = {
  name: { label: 'Name', type: 'text' },
  content: { label: 'Content', type: 'content' },
}

type Props = {
  articleId: string
}

const Section = ({ articleId }: Props) => {
  return (
    <Content<CreateSectionType2, SectionType>
      contentName="section"
      contentProps={sectionProps}
      contentSchema={createArticleSchema}
      createApi={SectionService.creteSection}
      getApi={SectionService.getSectionList}
      parentId={articleId}
      parentIdName={"articleId"}
      getContentApi={SectionService.getSection}
    />
  );
}

export default Section;
