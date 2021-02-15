<template>
    <div class='filters'>
        <strong class='category'>Категории:</strong>
        <div class="checkbox">
            <input class="custom-checkbox" type="checkbox" id="color-1" name="color-1" value="indigo">
            <label for="color-1">Смартфоны</label>
        </div>
        <div class="checkbox">
            <input class="custom-checkbox" type="checkbox" id="color-2" name="color-2" value="indigo">
            <label for="color-2">Ноутбуки</label>
        </div>
        <div class="checkbox">
            <input class="custom-checkbox" type="checkbox" id="color-3" name="color-3" value="indigo">
            <label for="color-3">Приставки</label>
        </div>
        <div class="checkbox">
            <input class="custom-checkbox" type="checkbox" id="color-4" name="color-4" value="indigo">
            <label for="color-4">Наушники</label>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Filters'
}
</script>
<style scoped>
.filters{
    border: 1px solid black;
    border-radius: 4px;
    background-color: #F2F2F2;
    padding: 10px 15px;
    margin: 20px 20px;
}
.category{
    font-size: 23px;
    font-weight: 700;
}
.custom-checkbox {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }
    .custom-checkbox+label {
      display: inline-flex;
      align-items: center;
      user-select: none;
    }
    .custom-checkbox+label::before {
      content: '';
      display: inline-block;
      width: 1em;
      height: 1em;
      flex-shrink: 0;
      flex-grow: 0;
      border: 1px solid #adb5bd;
      border-radius: 0.25em;
      margin-right: 0.5em;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%;
    }
    .custom-checkbox:not(:disabled):not(:checked)+label:hover::before {
      border-color: #b3d7ff;
    }
    .custom-checkbox:not(:disabled):active+label::before {
      background-color: #b3d7ff;
      border-color: #b3d7ff;
    }
    .custom-checkbox:focus+label::before {
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
    .custom-checkbox:focus:not(:checked)+label::before {
      border-color: #80bdff;
    }
    .custom-checkbox:checked+label::before {
      border-color: #0b76ef;
      background-color: #0b76ef;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
    }
    .custom-checkbox:disabled+label::before {
      background-color: #e9ecef;
    }
    .checkbox {
      margin-bottom: 1em;
    }
    
</style>