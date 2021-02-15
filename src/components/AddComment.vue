<template>
  <div>
    <form class="form">
      <textarea
        class="form__comment"
        name="text"
        placeholder="напишите ваше мнение о товаре..."
      ></textarea>
      <input type="submit" class="form__btn" value="Добавить" />
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
.form__comment {
  border: 1px solid #2f80ed;
  border-radius: 8px;
  resize: none;
  color: #4f4f4f;
  font-size: 19px;
  background-color: #e0e0e0;
  padding: 0px 15px;
  width: 445px;
  height: 70px;
}
.form__btn {
  border: none;
  background-color: #2f80ed;
  border-radius: 16px;
  color: #f2f2f2;
  font-size: 19px;
  margin-left: 20px;
  padding: 5px 20px;
  cursor: pointer;
}
.form__btn:focus {
  outline: none;
}
.form__comment:focus {
  outline: none;
}
@media (max-width: 510px) {
  .form__comment {
    width: 350px;
  }
}
@media (max-width: 400px) {
  .form__comment {
    width: 280px;
  }
}
</style>
