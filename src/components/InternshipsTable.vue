<template>
  <table class="table table-dark table-hover">
    <thead>
    <tr>
      <th scope="col">Asukoht</th>
      <th scope="col">Valdkond</th>
      <th scope="col">Ettevõtte nimi</th>
      <th scope="col">Ametikoht</th>
      <th scope="col">Lisamise kuupäev</th>
      <th scope="col">
        <font-awesome-icon :icon="['fas', 'image']"/>
      </th>

    </tr>
    </thead>
    <tbody>
    <tr>
      <td>Merko</td>
      <td>Harjumaa</td>
      <td>Ehitus</td>
      <td>2023-05-05</td>
      <td>LOGO</td>
      <td>LOGO</td>
    </tr>
    <tr>
      <td>Mäkk</td>
      <td>Harjumaa</td>
      <td>Kokandus</td>
      <td>2023-05-05</td>
      <td>LOGO</td>
      <td>LOGO</td>
    </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'InternshipsTable',

  data() {
    return {
      // roleName: sessionStorage.getItem('roleName')

    }

  },
}
</script>