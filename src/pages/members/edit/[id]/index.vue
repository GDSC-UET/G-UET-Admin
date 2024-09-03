<template>
  <MemberForm
    action="update"
    title="Edit member"
    submit-button-label="Update member"
    :form="currentMember"
  />
</template>

<script setup lang="ts">
const currentMember = ref({
  name: 'Tran Manh Dung',
  email: 'g-uet@gmail.com',
  school: 'UET',
  position: 'Frontend Developer',
  joinedAt: new Date('03/08/2004'),
  gen: 0,
  aboutThisMember: '',
  facebook: 'https://facebook.com',
  github: '',
  linkedin: ''
})
</script>
