import { FunctionComponent } from "react"
import { Button, Input, Textarea } from "../../../shared/ui"

const ButtonLabel = {
  POST: "게시물 추가",
  PATCH: "게시물 업데이트",
}

type TPost = keyof typeof ButtonLabel

type TPostForm = {
  type: TPost
  postData?: { title: string; body: string; userId?: number }
}

const PostForm: FunctionComponent<TPostForm> = ({
  postData = {
    title: "",
    body: "",
    userId: 1,
  },
  type,
}) => {
  return (
    <div className="space-y-4">
      <Input
        placeholder="제목"
        value={postData.title}
        onChange={(e) => {
          console.log(e)
        }}
      />
      <Textarea
        rows={30}
        placeholder="내용"
        value={postData.body}
        onChange={(e) => {
          console.log(e)
        }}
      />
      {type === "POST" && (
        <Input
          type="number"
          placeholder="사용자 ID"
          value={postData.userId}
          onChange={(e) => {
            console.log(e)
          }}
        />
      )}
      <Button onClick={() => {}}>{ButtonLabel[type]}</Button>
    </div>
  )
}

export default PostForm
