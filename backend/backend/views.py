from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.reverse import reverse
 
@api_view(['GET'])
@permission_classes((AllowAny, ))
def api_root(request, format=None):
    return Response({
        'author_list': reverse('api:author_list', request=request, format=format),
        'quoteset_list': reverse('api:quoteset_list', request=request, format=format),
        'account_list': reverse('api:account_list', request=request, format=format),
        'account_to_quoteset_list': reverse('api:account_to_quoteset_list', request=request, format=format),
        'account_to_quoteset_full': reverse('api:account_to_quoteset_full', request=request, format=format),
        'email_verify': reverse('api:email_verify', request=request, format=format),
        'email_verify_confirm': reverse('api:email_verify_confirm', request=request, format=format),
        'password_reset': reverse('api:password_reset', request=request, format=format),
        'password_reset_confirm': reverse('api:password_reset_confirm', request=request, format=format),
        'knox_login': reverse('api:knox_login', request=request, format=format),
        'knox_logout': reverse('api:knox_logout', request=request, format=format),
        'social_convert_token': reverse('api:convert_token', request=request, format=format),
        'social_revoke_token': reverse('api:revoke_token', request=request, format=format),
        'refresh_token': reverse('api:refresh_token', request=request, format=format)
    })